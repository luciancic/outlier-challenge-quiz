import React, { useReducer } from 'react'
import 'normalize.css'
import './Quiz.scss'
import { reducer, initialState } from '../reducer/reducer'
import TopProgressBar from './TopProgressBar'
import QuestionCounter from './QuestionCounter'
import Category from './Category'
import DifficultyRating from './DifficultyRating'
import Question from './Question'
import OptionSet from './OptionSet'
import Feedback from './Feedback'
import NextQuestion from './NextQuestion'
import ScoreMeter from './ScoreMeter'

function Quiz () {
  const [ quiz, dispatch ] = useReducer(reducer, initialState)
  const {
    currentQuestion,
    currentRound,
    playerAnswered,
    isAnswerCorrect,
    score,
    minScore,
    maxScore,
    maxQuestions
  } = quiz
  const {
    category,
    difficulty,
    question,
    type
  } = currentQuestion
  const correctAnswer = currentQuestion.correct_answer
  const incorrectAnswers = currentQuestion.incorrect_answers

  return <div className='quiz'>
    <TopProgressBar maxQuestions={maxQuestions} currentQuestion={currentRound} />
    <div className='quiz__content'>
      <QuestionCounter maxQuestions={maxQuestions} currentQuestion={currentRound} />
      <Category text={category} />
      <DifficultyRating difficulty={difficulty} />
      <Question text={question} />
      <OptionSet
        answered={playerAnswered}
        correctAnswer={correctAnswer}
        incorrectAnswers={incorrectAnswers}
        handleCorrect={() => dispatch('answer_correct')}
        handleIncorrect={() => dispatch('answer_incorrect')}
        type={type} />
      { isAnswerCorrect !== null && <Feedback correct={isAnswerCorrect} /> }
      { playerAnswered && <NextQuestion handler={() => dispatch('next_question')} /> }
      <ScoreMeter score={score} minScore={minScore} maxScore={maxScore} />
    </div>
  </div>
}

export default Quiz
