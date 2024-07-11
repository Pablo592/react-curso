import { useState } from 'react'
import PropTypes from 'prop-types'

export const CounterApp = ({ value }) => {

  const [counter, setCounter] = useState(value);

  const sumador = () => {
    setCounter(counter + 1);
  }

  const restador = () => {
    setCounter(counter - 1);
  }

  const reset = () => {
    setCounter(value);
  }

  return (
    <>
      <button onClick={sumador} >
        +1
      </button>
      <button onClick={restador} >
        -1
      </button>
      <button onClick={reset} >
        Reset
      </button>
      <h2>
        {counter}
      </h2>
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired
}