import React, { useState } from 'react'

function AsyncCounter() {
  let [counter, setCounter] = useState(0)
  let [loading, setLoading] = useState(false)

  function delayCount() {
    setLoading(true)
    setTimeout(() => {
      setCounter(prev => prev + 1)
      setLoading(false)
    }, 500)
  }

  return (
    <>
      <h1 data-testid="counter">{loading ? 'WAIT!' : counter}</h1>
      <button data-testid="btn-up" onClick={delayCount} disabled={loading}>
        Up
      </button>
      <button
        data-testid="btn-down"
        onClick={() => setCounter(counter - 1)}
        disabled={loading}
      >
        Down
      </button>
    </>
  )
}

export default AsyncCounter
