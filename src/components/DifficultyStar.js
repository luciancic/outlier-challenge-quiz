import React from 'react'

function DifficultyStar (props) {
  const className = `quiz__star ${props.darken && 'quiz__star--darken'}`
  return <span className={className}>&#9733;</span>
}

export default DifficultyStar
