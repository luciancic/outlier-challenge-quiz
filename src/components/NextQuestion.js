import React from 'react'

function NextQuestion (props) {
  return <button className='quiz__next-question' onClick={props.handler}>Next Question</button>
}

export default NextQuestion
