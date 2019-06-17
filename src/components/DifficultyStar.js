import React from 'react'

function DifficultyStar (props) {
  const className = `quiz__star ${props.darken && 'quiz__star--darken'}`
  return <i className={className}>&#9733;</i>
}

export default DifficultyStar
