import React from 'react'
import { shallow } from 'enzyme'
import Option from './Option'

it('should render text and handle click', function () {
  const text = 'Dirk%20the%20Daring'
  const handlerMock = jest.fn()
  const wrapper = shallow(<Option text={text} handler={handlerMock} />)
  expect(wrapper.text()).toEqual('Dirk the Daring')
  expect(handlerMock.mock.calls.length).toEqual(0)
  wrapper.simulate('click')
  expect(handlerMock.mock.calls.length).toEqual(1)
})
