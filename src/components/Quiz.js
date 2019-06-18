import React, { useState } from 'react'
import 'normalize.css'
import './Quiz.scss'
import ProgressBar from './ProgressBar'
import QuestionCounter from './QuestionCounter'
import Category from './Category'
import DifficultyRating from './DifficultyRating'
import Question from './Question'
import OptionSet from './OptionSet'
import questions from '../questions.json'

function Quiz () {
  const [ currentRound ] = useState(10)
  const [ , setScore ] = useState(0)
  const [ answered, setAnswered ] = useState(false)
  const q = questions[0]

  return <div className='quiz'>
    <ProgressBar maxQuestions={questions.length} currentQuestion={currentRound} />
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
  </div>
}

export default Quiz
