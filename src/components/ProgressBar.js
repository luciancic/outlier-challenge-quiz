import React from 'react'

function QuestionBar (props) {
  const style = getStyle(props.currentQuestion, props.maxQuestions)

  return <div className='quiz__progress-bar' style={style} />
}

export function getStyle (current, total) {
  return {
    width: (current / total * 100) + 'vw'
  }
}

export default QuestionBar
