import React, { useState } from 'react'
import 'normalize.css'
import './Quiz.scss'
import TopProgressBar from './TopProgressBar'
import QuestionCounter from './QuestionCounter'
import Category from './Category'
import DifficultyRating from './DifficultyRating'
import Question from './Question'
import OptionSet from './OptionSet'
import Feedback from './Feedback'
import NextQuestion from './NextQuestion'
import ScoreMeter from './ScoreMeter'
import questions from '../questions.json'

function Quiz () {
  const [ currentRound, setCurrentRound ] = useState(1)
  const [ mistakes, setMistakes ] = useState(0)
  const [ answered, setAnswered ] = useState(false)
  const [ roundCorrect, setRoundCorrect ] = useState(null)
  const q = questions[currentRound - 1]

  function nextQuestion () {
    setCurrentRound(currentRound + 1)
    setAnswered(false)
    setRoundCorrect(null)
  }
  function handleCorrect () {
    setRoundCorrect(true)
  }
  function handleIncorrect () {
    setMistakes(mistakes + 1)
    setRoundCorrect(false)
  }

  return <div className='quiz'>
    <TopProgressBar maxQuestions={questions.length} currentQuestion={currentRound} />
    <QuestionCounter maxQuestions={questions.length} currentQuestion={currentRound} />
    <Category text={q.category} />
    <DifficultyRating difficulty={q.difficulty} />
    <Question text={q.question} />
    <OptionSet
      answered={answered}
      setAnswered={setAnswered}
      correctAnswer={q.correct_answer}
      incorrectAnswers={q.incorrect_answers}
      handleCorrect={handleCorrect}
      handleIncorrect={handleIncorrect}
      type={q.type} />
    { roundCorrect !== null && <Feedback correct={roundCorrect} /> }
    { answered && <NextQuestion handler={nextQuestion} /> }
    <ScoreMeter maxRounds={questions.length} mistakes={mistakes} currentRound={currentRound} />
  </div>
}

export default Quiz
