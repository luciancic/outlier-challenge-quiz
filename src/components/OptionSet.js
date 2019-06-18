import React, { useState } from 'react'
import Option from './Option'

function OptionSet (props) {
  const { correctAnswer, incorrectAnswers, handleCorrect, handleIncorrect, type } = props
  const [ answered, setAnswered ] = useState(false)
  const correctIndex = getRandom(type)
  const options = Array.from(incorrectAnswers)
  options.splice(correctIndex, 0, correctAnswer)
  function createHandler (handler) {
    return function () {
      if (!answered) {
        handler()
        setAnswered(true)
      }
    }
  }

  return <div>
    {options.map(function (val, i) {
      return <Option key={i} handler={createHandler(i === correctIndex ? handleCorrect : handleIncorrect)} text={val} />
    })}
  </div>
}

export function getRandom (type) {
  // returns 0 or 1 for boolean
  // and between 0 and 3 for multiple
  return type === 'boolean' ? Math.floor(Math.random() * Math.floor(2))
    : type === 'multiple' ? Math.floor(Math.random() * Math.floor(4))
      : new TypeError('type must be \'boolean\' or \'multiple\'')
}

export default OptionSet
