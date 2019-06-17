import React from 'react'

function Question (props) {
  const text = decodeURIComponent(props.text)
  return <p>{text}</p>
}

export default Question
