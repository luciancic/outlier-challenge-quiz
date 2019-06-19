import React from 'react'
import { shallow } from 'enzyme'
import NextQuestion from './NextQuestion'

/* global it, expect, jest */
it('should render and handle click', function () {
  const hanlderMock = jest.fn()
  const wrapper = shallow(<NextQuestion handler={hanlderMock} />)
  expect(wrapper.find('button').length).toEqual(1)
  expect(hanlderMock.mock.calls.length).toEqual(0)
  wrapper.simulate('click')
  expect(hanlderMock.mock.calls.length).toEqual(1)
})
