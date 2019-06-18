import React from 'react'
import { mount } from 'enzyme'
import OptionSet, { getRandom } from './OptionSet'
import Option from './Option'

const correctAnswer = 'Dirk%20the%20Daring'
const incorrectAnswers = [
  'Arthur',
  'Sir%20Toby%20Belch',
  'Guy%20of%20Gisbourne'
]
let handleCorrectMock, handleIncorrectMock, wrapper

beforeEach(function () {
  handleCorrectMock = jest.fn()
  handleIncorrectMock = jest.fn()
  wrapper = mount(<OptionSet
    type='multiple'
    correctAnswer={correctAnswer}
    incorrectAnswers={incorrectAnswers}
    handleCorrect={handleCorrectMock}
    handleIncorrect={handleIncorrectMock} />)
})

it('should contain all the options', function () {
  const options = wrapper.find(Option)
  expect(options.length).toEqual(4)

  const correctOption = options.find({ correct: true })
  expect(correctOption.length).toEqual(1)
  expect(correctOption.text()).toEqual('Dirk the Daring')

  const incorrectOptions = options.find({ correct: false })
  expect(incorrectOptions.legth).toEqual(3)
})

it('should switch answered piece of state', function () {
  expect(wrapper.state('answere')).toBe(false)

  wrapper.find(Option)[0].simulate('click')
  expect(wrapper.state('answere')).toBe(true)
})

it('should use the correct handler for the correct option', function () {
  const correctOption = wrapper.find({ text: 'Dirk%20the%20Daring' })
  expect(handleCorrectMock.mock.calls.length).toEqual(0)
  correctOption.simulate('click')
  expect(handleCorrectMock.mock.calls.length).toEqual(1)
  expect(handleIncorrectMock.mock.calls.length).toEqual(0)
})

it('should use the incorrect handler for the incorrect option', function () {
  const incorrectOption = wrapper.find({ text: 'Arthur' })
  expect(handleIncorrectMock.mock.calls.length).toEqual(0)
  incorrectOption.simulate('click')
  expect(handleIncorrectMock.mock.calls.length).toEqual(1)
  expect(handleCorrectMock.mock.calls.length).toEqual(0)
})

it('should not use score incrementer passed down if already answered', function () {
  const correctOption = wrapper.find({ text: 'Dirk%20the%20Daring' })
  expect(handleCorrectMock.mock.calls.length).toEqual(0)
  correctOption.simulate('click')
  expect(handleCorrectMock.mock.calls.length).toEqual(1)
  expect(handleIncorrectMock.mock.calls.length).toEqual(0)
  correctOption.simulate('click')
  expect(handleCorrectMock.mock.calls.length).toEqual(1)
  expect(handleIncorrectMock.mock.calls.length).toEqual(0)
})

it('should generate a random number in range', function () {
  const randomBoolean = getRandom('boolean')
  expect(randomBoolean).toBeLessThan(2)

  const randomMultiple = getRandom('multiple')
  expect(randomMultiple).toBeLessThan(4)
})
