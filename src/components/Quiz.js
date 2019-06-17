import React, { useState } from 'react'
import 'normalize.css'
import './Quiz.scss'
import ProgressBar from './ProgressBar'
import QuestionCounter from './QuestionCounter'
import Category from './Category'
import questions from '../questions.json'

function Quiz () {
  const [ currentRound ] = useState(10)

  return <div className='quiz'>
    <ProgressBar maxQuestions={questions.length} currentQuestion={currentRound} />
    <QuestionCounter maxQuestions={questions.length} currentQuestion={currentRound} />
    <Category text={questions[0].category} />
  </div>
}

export default Quiz
