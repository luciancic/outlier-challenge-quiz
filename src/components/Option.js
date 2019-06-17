import React from 'react'

function Option (props) {
  const text = decodeURIComponent(props.text)

  return <button onClick={props.handler}>{text}</button>
}

export default Option
