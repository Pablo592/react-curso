import { useState } from 'react'
import PropTypes from 'prop-types'

export const CounterApp = ({ value }) => {

  const [counter, setCounter] = useState(value);

  const sumador = () => {
    setCounter(counter + 1);
  }

  return (
    <>
      <button onClick={sumador} >
        CounterApp
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