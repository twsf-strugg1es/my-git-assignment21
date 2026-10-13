import { useState } from 'react'
import './Counter.css'

function Counter() {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount(count + 1)
  }

  const handleDecrement = () => {
    setCount(count - 1)
  }

  const handleReset = () => {
    setCount(0)
  }

  return (
    <div className="counter-card">
      <h1 className="counter-title">Simple Counter App</h1>
      <p className="counter-display" aria-live="polite">
        Count: <span className="counter-value">{count}</span>
      </p>

      <div className="button-group">
        <button
          type="button"
          className="btn btn-decrement"
          onClick={handleDecrement}
          aria-label="Decrement counter"
        >
          −
        </button>

        <button
          type="button"
          className="btn btn-reset"
          onClick={handleReset}
          aria-label="Reset counter"
        >
          Reset
        </button>

        <button
          type="button"
          className="btn btn-increment"
          onClick={handleIncrement}
          aria-label="Increment counter"
        >
          +
        </button>
      </div>
    </div>
  )
}

export default Counter
