import React, { useState } from 'react'
import 'normalize.css'
import './Quiz.scss'
import ProgressBar from './ProgressBar'
import QuestionCounter from './QuestionCounter'
import Category from './Category'
import DifficultyRating from './DifficultyRating'
import Question from './Question'
import questions from '../questions.json'

function Quiz () {
  const [ currentRound ] = useState(10)
  const q = questions[0]

  return <div className='quiz'>
    <ProgressBar maxQuestions={questions.length} currentQuestion={currentRound} />
    <QuestionCounter maxQuestions={questions.length} currentQuestion={currentRound} />
    <Category text={q.category} />
    <DifficultyRating difficulty={q.difficulty} />
    <Question text={q.question} />
  </div>
}

export default Quiz
