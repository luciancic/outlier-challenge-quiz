import React from 'react'
import DifficultyStar from './DifficultyStar'

function DifficultyRating (props) {
  return <div>
    <DifficultyStar darken />
    <DifficultyStar darken={props.difficulty !== 'easy'} />
    <DifficultyStar darken={props.difficulty === 'hard'} />
  </div>
}

export default DifficultyRating
