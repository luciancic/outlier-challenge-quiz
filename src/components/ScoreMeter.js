import React from 'react'

function ScoreMeter (props) {
  const { currentRound, maxRounds, mistakes } = props
  const score = Math.floor((currentRound - mistakes) / currentRound * 100)
  const minScore = Math.floor(mistakes / maxRounds * 100)
  const maxScore = Math.floor((maxRounds - mistakes) / maxRounds * 100)

  return <div>
    <span>Score: {score}%</span>
    <span>Max Score: {maxScore}%</span>
    <div>
      <span title='Lowest Possible' style={{ width: `${minScore}%` }} />
      <span title='Current Score' style={{ width: `${score}%` }} />
      <span title='Highest Possible' style={{ width: `${maxScore}%` }} />
    </div>
  </div>
}

export default ScoreMeter
