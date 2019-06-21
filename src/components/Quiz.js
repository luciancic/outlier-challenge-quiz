import React, { useReducer } from 'react'
import 'normalize.css'
import './Quiz.scss'
import questions from '../questions.json'
import { reducer, initialState } from '../reducer/reducer'
import TopProgressBar from './TopProgressBar'
import QuestionCounter from './QuestionCounter'
import Category from './Category'
import DifficultyRating from './DifficultyRating'
import Question from './Question'
import OptionSet from './OptionSet'
import Feedback from './Feedback'
import NextQuestion from './NextQuestion'
import ScoreMeter from './ScoreMeter'

function Quiz () {
  const [ quiz, dispatch ] = useReducer(reducer, initialState)
  const q = questions[quiz.currentRound - 1]

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
    <ScoreMeter score={quiz.score} minScore={quiz.minScore} maxScore={quiz.maxScore} />
  </div>
}

export default Quiz
