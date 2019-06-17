import React, { useState } from 'react'
import ProgressBar from './ProgressBar'
import './Quiz.scss'
import questions from '../questions.json'

function Quiz () {
  const [ currentRound ] = useState(0)

  return <div className='quiz'>
    <ProgressBar maxQuestions={questions.length} currentQuestion={currentRound} />
  </div>
}

export default Quiz
