import React from 'react'
import { shallow } from 'enzyme'
import DifficultyStar from './DifficultyStar'

/* global it, expect */
it('should darken correclty', function () {
  const wrapper = shallow(<DifficultyStar darken={false} />)
  expect(wrapper.find('.quiz__star--darken').length).toBe(0)

  wrapper.setProps({ darken: true })
  expect(wrapper.find('.quiz__star--darken').length).toBe(1)
})
