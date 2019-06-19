import React from 'react'
import { render } from '@testing-library/react'
import ScoreMeter from './ScoreMeter'

/* global it, expect */
it('should render all the components', function () {
  const scoreMeter = render(<ScoreMeter mistakes={2} currentRound={4} maxRounds={20} />)
  expect(scoreMeter.findByText('Score: 50%')).toBeTruthy()
  expect(scoreMeter.findByText('Max Score: 90%')).toBeTruthy()
  expect(scoreMeter.findByTitle('Lowest Possible')).toHaveStyle('width: 10%')
  expect(scoreMeter.findByTitle('Current Score')).toHaveStyle('width: 50%')
  expect(scoreMeter.findByTitle('Highest Possible')).toHaveStyle('width: 90%')
})
