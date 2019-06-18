import React, { useState } from 'react'
import 'normalize.css'
import './Quiz.scss'
import TopProgressBar from './TopProgressBar'
import QuestionCounter from './QuestionCounter'
import Category from './Category'
import DifficultyRating from './DifficultyRating'
import Question from './Question'
import OptionSet from './OptionSet'
import NextQuestion from './NextQuestion'
import questions from '../questions.json'

function Quiz () {
  const [ currentRound, setCurrentRound ] = useState(10)
  const [ , setScore ] = useState(0)
  const [ answered, setAnswered ] = useState(false)
  const q = questions[0]

  function nextQuestion () {
    setCurrentRound(currentRound + 1)
    setAnswered(false)
  }

  return <div className='quiz'>
    <TopProgressBar maxQuestions={questions.length} currentQuestion={currentRound} />
    <QuestionCounter maxQuestions={questions.length} currentQuestion={currentRound} />
    <Category text={q.category} />
    <DifficultyRating difficulty={q.difficulty} />
    <Question text={q.question} />
    <OptionSet
      answered={answered}
      setAnswered={setAnswered}
      correctAnswer={q.correct_answer}
      incorrectAnswers={q.incorrect_answers}
      handleCorrect={setScore}
      handleIncorrect={setScore}
      type={q.type} />
    { answered && <NextQuestion handler={nextQuestion} /> }
  </div>
}

export default Quiz
