import React from 'react'

function Feedback (props) {
  return <p>{ props.correct ? 'Correct!' : 'Sorry!' }</p>
}

export default Feedback
