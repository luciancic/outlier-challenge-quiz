import React from 'react'
import { shallow } from 'enzyme'
import OptionSet, { getRandom } from './OptionSet'
import Option from './Option'

const correctAnswer = 'Dirk%20the%20Daring'
const incorrectAnswers = [
  'Arthur',
  'Sir%20Toby%20Belch',
  'Guy%20of%20Gisbourne'
]
const handleCorrectMock = jest.fn()
const handleIncorrectMock = jest.fn()
let wrapper

beforeEach(function () {
  wrapper = shallow(<OptionSet
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

it('should use the right handler on each option', function () {
  const correctOption = wrapper.find({ correct: true })
  expect(correctOption.prop('handler')).toEqual(handleCorrectMock)
  expect(handleCorrectMock.mock.calls.legth).toEqual(0)
  correctOption.simulate('click')
  expect(handleCorrectMock.mock.calls.legth).toEqual(1)

  const incorrectOptions = wrapper.find({ correct: false })
  expect(incorrectOptions.prop('handler')).toEqual(handleIncorrectMock)
  expect(handleIncorrectMock.mock.calls.legth).toEqual(0)
  incorrectOptions.simulate('click')
  expect(handleIncorrectMock.mock.calls.legth).toEqual(1)
})

it('should not use score incrementer passed down if already answered', function () {
  const correctOption = wrapper.find({ handler: handleCorrectMock })[0]
  expect(handleCorrectMock.mock.calls.legth).toEqual(0)
  correctOption.simulate('click')
  expect(handleCorrectMock.mock.calls.legth).toEqual(1)
  correctOption.simulate('click')
  expect(handleCorrectMock.mock.calls.legth).toEqual(1)
})

it('should generate a random number in range', function () {
  const randomBoolean = getRandom('boolean')
  expect(randomBoolean).toBeLessThan(2)

  const randomMultiple = getRandom('multiple')
  expect(randomMultiple).toBeLessThan(4)
})
