import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Quiz from './Quiz'

/* global it, expect, beforeEach */

let quiz

beforeEach(function () {
  quiz = render(<Quiz />)
})

it('renders without crashing', () => { // eslint-disable-line
  expect(quiz.baseElement).toBeInTheDocument()
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
