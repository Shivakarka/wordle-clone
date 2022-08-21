import React from 'react'

export default function Row({ guess }) {

if (guess) {
    return (
      <div className="row past">

        {/* letter - l , index - i */}

        {guess.map((l, i) => (
          <div key={i} className={l.color}>{l.key}</div>
        ))}
      </div>
    )
}

  return (
    <div className="row">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
  
}