import React from 'react'

function QuestionCounter (props) {
  const { maxQuestions, currentQuestion } = props
  return <h1 className='quiz__question-counter'>Question {currentQuestion} of {maxQuestions}</h1>
}

export default QuestionCounter
