import React from 'react'
import ReactDOM from 'react-dom'
import Quiz from './Quiz'

it('renders without crashing', () => { // eslint-disable-line
  const div = document.createElement('div')
  ReactDOM.render(<Quiz />, div)
  ReactDOM.unmountComponentAtNode(div)
})
