import React from 'react'

function Question (props) {
  const text = decodeURIComponent(props.text)
  return <p className='quiz__question'>{text}</p>
}

export default Question
