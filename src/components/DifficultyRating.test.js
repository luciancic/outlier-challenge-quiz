import React from 'react'
import { shallow } from 'enzyme'
import DifficultyRating from './DifficultyRating'

it('should render 3 stars', function () {
  const wrapper = shallow(<DifficultyRating difficulty='hard' />)
  // expect find(DifficultyStar).length to be 3
})

it('should darken 1 star on easy', function () {
  const wrapper = shallow(<DifficultyRating difficulty='easy' />)
  // const stars = wrapper.find(DifficultyStar)
  // expect stars.find('.darken').length to be 1
})

it('should darken 2 stars on medium', function () {
  const wrapper = shallow(<DifficultyRating difficulty='medium' />)
  // const stars = wrapper.find(DifficultyStar)
  // expect stars.find('.darken').length to be 2
})

it('should darken 3 stars on hard', function () {
  const wrapper = shallow(<DifficultyRating difficulty='hard' />)
  // const stars = wrapper.find(DifficultyStar)
  // expect stars.find('.darken').length to be 3
})