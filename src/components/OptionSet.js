import React, { useState } from 'react'
import Option from './Option'

function OptionSet (props) {
  const { answered, correctAnswer, incorrectAnswers, handleCorrect, handleIncorrect, type } = props
  const [ chosenOption, setChosenOption ] = useState(null)
  const [ correctIndex ] = useState(getRandom(type))

  const options = Array.from(incorrectAnswers)
  options.splice(correctIndex, 0, correctAnswer)

  function createHandler (i, handler) {
    return function () {
      if (!answered) {
        handler()
        setChosenOption(i)
      }
    }
  }

  function getStyle (i) {
    if (answered) {
      return i === chosenOption ? 'chosen'
        : (i !== chosenOption) && (i === correctIndex) ? 'missed'
          : 'disabled'
    }
  }

  return <div className='quiz__option-container'>
    {options.map(function (val, i) {
      return <Option
        key={i}
        handler={createHandler(i, i === correctIndex ? handleCorrect : handleIncorrect)}
        text={val}
        style={getStyle(i)} />
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
