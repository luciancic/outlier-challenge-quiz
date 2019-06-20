import React from 'react'

function TopProgressBar (props) {
  const style = getStyle(props.currentQuestion, props.maxQuestions)

  return <div className='quiz__progress-bar' style={style} />
}

export function getStyle (current, total) {
  return {
    width: (current / total * 100) + 'vw'
  }
}

export default TopProgressBar
