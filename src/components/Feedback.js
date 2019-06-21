import React from 'react'

function Feedback (props) {
  return <p className='quiz__feedback'>{ props.correct ? 'Correct!' : 'Sorry!' }</p>
}

export default Feedback
