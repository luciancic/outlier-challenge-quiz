import React from 'react'
import { shallow } from 'enzyme'
import Question from './Question'

/* global it, expect */
it('should decode and render the question', function () {
  const text = 'What%20was%20the%20name%20of%20the%20hero%20in%20the%2080s%20animated%20video%20game%20%27Dragon%27s%20Lair%27%3F'
  const wrapper = shallow(<Question text={text} />)
  expect(wrapper.text()).toEqual('What was the name of the hero in the 80s animated video game \'Dragon\'s Lair\'?')
})
