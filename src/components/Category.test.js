import React from 'react'
import { shallow } from 'enzyme'
import Category from './Category'

it('should decode and render category text correctly', function () {
  const text = 'Entertainment%3A%20Video%20Games'
  const wrapper = shallow(<Category text={text} />)
  
  expect(wrapper.text()).toEqual('Entertainment: Video Games')
})
