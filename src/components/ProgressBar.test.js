import React from 'react'
import { shallow } from 'enzyme'
import ProgressBar, { getStyle } from './ProgressBar'

/* global it, expect */
it('should render', function () {
  const wrapper = shallow(<ProgressBar currentQuestion={3} maxQuestions={10} />)
  expect(wrapper).toBeTruthy()
})

it('should produce the right style', function () {
  expect(getStyle(3, 10)).toEqual({ width: '30vw' })
})
