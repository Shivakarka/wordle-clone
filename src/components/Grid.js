import React from 'react'
import Row from './Row'

export default function Grid({ guesses, currentGuess, turn }) {
  return (
    <div>
    
    {/* guess object - g , index - i */}
    
      {guesses.map((g, i) => {
        return <Row key={i}  guess={g}/> 
      })}
    </div>
  )
}