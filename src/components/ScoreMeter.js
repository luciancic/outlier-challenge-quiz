import React from 'react'

function ScoreMeter (props) {
  let { score, minScore, maxScore } = props
  score = score + '%'
  minScore = minScore + '%'
  maxScore = maxScore + '%'

  return <div className='score'>
    <span className='score__score'>Score: {score}</span>
    <span className='score__max-score'>Max Score: {maxScore}</span>
    <div className='score__bar score__bar--container'>
      <div title='Highest Possible' className='score__bar score__bar-child score__bar-child--highest' style={{ width: maxScore }} />
      <div title='Current Score' className='score__bar score__bar-child score__bar-child--current' style={{ width: score }} />
      <div title='Lowest Possible' className='score__bar score__bar-child score__bar-child--lowest' style={{ width: minScore }} />
    </div>
  </div>
}

export default ScoreMeter
