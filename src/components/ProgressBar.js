import React from 'react'

function QuestionBar (props) {
  const width = getWidth(props.maxQuestions, props.currentQuestion)

  return <div className='quiz__progress-bar' style={{ width }} />
}

function getWidth (total, current) {
  return (current / total * 100) + 'vw'
}

export default QuestionBar
