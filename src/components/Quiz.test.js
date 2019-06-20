import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Quiz from './Quiz'

// Integration tests
/* global it, expect, beforeEach */

let quiz

beforeEach(function () {
  quiz = render(<Quiz />)
})

it('renders without crashing', () => { // eslint-disable-line
  expect(quiz.baseElement).toBeInTheDocument()
})

it('should navigate questions in order', function () {
  const question1 = "What was the name of the hero in the 80s animated video game 'Dragon's Lair'?"
  expect(quiz.getByText(question1)).toBeInTheDocument()

  answerAndNext('Dirk the Daring')

  const question2 = 'What is the scientific name for modern day humans?'
  expect(quiz.queryByText(question1)).toBe(null)
  expect(quiz.getByText(question2)).toBeInTheDocument()
})

it('should should display number of questions', function () {
  expect(quiz.getByText('Question 1 of 20')).toBeInTheDocument()

  answerAndNext('Dirk the Daring')

  expect(quiz.getByText('Question 2 of 20')).toBeInTheDocument()
})

it('should congratulate on correct answer', function () {
  fireEvent.click(quiz.getByText('Dirk the Daring'))

  expect(quiz.getByText('Correct!')).toBeInTheDocument()
})

it('should say sorry on incorrect answer', function () {
  fireEvent.click(quiz.getByText('Arthur'))

  expect(quiz.getByText('Sorry!')).toBeInTheDocument()
})

it('should remove feedback on next question', function () {
  answerAndNext('Dirk the Daring')

  expect(quiz.queryByText('Correct!')).toBe(null)
  expect(quiz.queryByText('Sorry!')).toBe(null)
})

it('should display the correct minimum score', function () {
  const lowest = quiz.getByTitle('Lowest Possible')
  expect(lowest).toHaveStyle('width: 0%')

  fireEvent.click(quiz.getByText('Dirk the Daring'))
  expect(lowest).toHaveStyle('width: 5%')

  fireEvent.click(quiz.getByText('Next Question'))
  expect(lowest).toHaveStyle('width: 5%')

  fireEvent.click(quiz.getByText('Homo Erectus'))
  expect(lowest).toHaveStyle('width: 5%')
})

it('should display the correct score in score bar', function () {
  const current = quiz.getByTitle('Current Score')
  expect(current).toHaveStyle('width: 100%')

  fireEvent.click(quiz.getByText('Dirk the Daring'))
  expect(current).toHaveStyle('width: 100%')

  fireEvent.click(quiz.getByText('Next Question'))
  expect(current).toHaveStyle('width: 100%')

  fireEvent.click(quiz.getByText('Homo Erectus'))
  expect(current).toHaveStyle('width: 50%')

  fireEvent.click(quiz.getByText('Next Question'))
  expect(current).toHaveStyle('width: 50%')
})

it('should display the correct score in score bar', function () {
  const highest = quiz.getByTitle('Highest Possible')
  expect(highest).toHaveStyle('width: 100%')

  answerAndNext('Arthur')
  expect(highest).toHaveStyle('width: 95%')

  answerAndNext('Homo Sapiens')
  expect(highest).toHaveStyle('width: 95%')
})

it('should style chosen option', function () {
  const dirk = quiz.getByText('Dirk the Daring')
  expect(dirk).toHaveClass('quiz__option')
  expect(dirk).not.toHaveClass('quiz__option--chosen')
  fireEvent.click(dirk)
  expect(dirk).toHaveClass('quiz__option--chosen')
})

it('should style disabled options', function () {
  const dirk = quiz.getByText('Dirk the Daring')
  const arthur = quiz.getByText('Arthur')
  const toby = quiz.getByText('Sir Toby Belch')
  const guy = quiz.getByText('Guy of Gisbourne')

  fireEvent.click(guy)
  expect(guy).toHaveClass('quiz__option--chosen')
  expect(dirk).toHaveClass('quiz__option--missed')
  expect(arthur).toHaveClass('quiz__option--disabled')
  expect(toby).toHaveClass('quiz__option--disabled')
})

function answerAndNext (answer) {
  const option = quiz.getByText(answer)
  fireEvent.click(option)
  fireEvent.click(quiz.getByText('Next Question'))
}
