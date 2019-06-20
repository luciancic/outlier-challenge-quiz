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

it('should navigate questions in order', function () {
  expect(quiz.getByText('Question 1 of 20')).toBeInTheDocument()

  answerAndNext('Dirk the Daring')

  expect(quiz.getByText('Question 2 of 20')).toBeInTheDocument()
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
