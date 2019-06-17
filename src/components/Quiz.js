import React, { useState } from 'react'
import 'normalize.css'
import './Quiz.scss'
import ProgressBar from './ProgressBar'
import QuestionCounter from './QuestionCounter'
import questions from '../questions.json'

function Quiz () {
  const [ currentRound ] = useState(10)

  return <div className='quiz'>
    <ProgressBar maxQuestions={questions.length} currentQuestion={currentRound} />
    <QuestionCounter maxQuestions={questions.length} currentQuestion={currentRound} />
  </div>
}

export default Quiz
