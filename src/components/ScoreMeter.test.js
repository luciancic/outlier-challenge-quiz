import React from 'react'
import { render } from '@testing-library/react'
import ScoreMeter from './ScoreMeter'

/* global it, expect */
it('should render all the components', function () {
  const scoreMeter = render(<ScoreMeter score={50} minScore={10} maxScore={90} />)
  expect(scoreMeter.findByText('Score: 50%')).toBeTruthy()
  expect(scoreMeter.findByText('Max Score: 90%')).toBeTruthy()
  expect(scoreMeter.getByTitle('Lowest Possible')).toHaveStyle('width: 10%')
  expect(scoreMeter.getByTitle('Current Score')).toHaveStyle('width: 50%')
  expect(scoreMeter.getByTitle('Highest Possible')).toHaveStyle('width: 90%')
})
