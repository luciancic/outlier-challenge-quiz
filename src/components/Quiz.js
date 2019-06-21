import React, { useState, useReducer } from 'react'
import 'normalize.css'
import './Quiz.scss'
import TopProgressBar from './TopProgressBar'
import QuestionCounter from './QuestionCounter'
import Category from './Category'
import DifficultyRating from './DifficultyRating'
import Question from './Question'
import OptionSet from './OptionSet'
import Feedback from './Feedback'
import NextQuestion from './NextQuestion'
// import ScoreMeter from './ScoreMeter'
import questions from '../questions.json'

function Quiz () {
  const [ quiz, dispatch ] = useReducer(function (state, action) {
    switch (action) {
      case 'next_question':
        return {
          ...state,
          playerAnswered: false,
          currentRound: state.currentRound + 1,
          isAnswerCorrect: null
        }
      case 'answer_correct':
        return {
          ...state,
          playerAnswered: true,
          isAnswerCorrect: true,
          correctAnswers: state.correctAnswers + 1,
          score: getPercentage(state.correctAnswers + 1, questions.length)
        }
      case 'answer_incorrect':
        return {
          ...state,
          playerAnswered: true,
          isAnswerCorrect: false,
          score: getPercentage(state.correctAnswers, state.currentRound)
        }
    }
  }, {
    currentRound: 1,
    playerAnswered: false,
    isAnswerCorrect: null,
    correctAnswers: 0,
    score: 100,
    minScore: 0,
    maxScore: 100
  })

  const q = questions[quiz.currentRound - 1]

  function getPercentage (val, on) {
    return Math.floor(val / on * 100)
  }
  // function nextQuestion () {
  //   setCurrentRound(currentRound + 1)
  //   setAnswered(false)
  //   setRoundCorrect(null)
  // }
  // function handleCorrect () {
  //   setCorrectAnswers(correctAnswers + 1)
  //   setRoundCorrect(true)
  // }
  // function handleIncorrect () {
  //   setRoundCorrect(false)
  // }

  return <div className='quiz'>
    <TopProgressBar maxQuestions={questions.length} currentQuestion={quiz.currentRound} />
    <QuestionCounter maxQuestions={questions.length} currentQuestion={quiz.currentRound} />
    <Category text={q.category} />
    <DifficultyRating difficulty={q.difficulty} />
    <Question text={q.question} />
    <OptionSet
      answered={quiz.playerAnswered}
      // setAnswered={setAnswered}
      correctAnswer={q.correct_answer}
      incorrectAnswers={q.incorrect_answers}
      handleCorrect={() => dispatch('answer_correct')}
      handleIncorrect={() => dispatch('answer_incorrect')}
      type={q.type} />
    { quiz.isAnswerCorrect !== null && <Feedback correct={quiz.isAnswerCorrect} /> }
    { quiz.playerAnswered && <NextQuestion handler={() => dispatch('next_question')} /> }
    {/* <ScoreMeter maxRounds={questions.length} mistakes={mistakes} currentRound={currentRound} correctAnswers={correctAnswers} /> */}
  </div>
}

export default Quiz
