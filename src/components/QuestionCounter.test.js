import React from 'react'
import { shallow } from 'enzyme'
import QuestionCounter from './QuestionCounter'

it('should count questions', function () {
  const wrapper = shallow(<QuestionCounter maxQuestions={10} currentQuestion={3} />)
  expect(wrapper.text()).toEqual('Question 3 of 10')
})
