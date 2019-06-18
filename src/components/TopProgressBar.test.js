import React from 'react'
import { shallow } from 'enzyme'
import TopProgressBar, { getStyle } from './TopProgressBar'

/* global it, expect */
it('should render', function () {
  const wrapper = shallow(<TopProgressBar currentQuestion={3} maxQuestions={10} />)
  expect(wrapper).toBeTruthy()
})

it('should produce the right style', function () {
  expect(getStyle(3, 10)).toEqual({ width: '30vw' })
})
