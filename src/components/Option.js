import React from 'react'

function Option (props) {
  const text = decodeURIComponent(props.text)
  const stateStyle = props.style !== undefined ? 'quiz__option--' + props.style : ''
  const className = 'quiz__option ' + stateStyle

  return <button onClick={props.handler} className={className}>{text}</button>
}

export default Option
