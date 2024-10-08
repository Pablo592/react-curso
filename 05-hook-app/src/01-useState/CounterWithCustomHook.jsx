import { useCounter } from '../hooks/useCounter.js';

export const CounterWithCustomHook = () => {
    
    const { counter, increment, decrement, reset} = useCounter(10)

    return (
    <>
        <h1>Counter with Hook: {counter}    </h1>
        <hr />
        <button className='btn' onClick={() => increment(1)}>+1</button>
        <button className='btn' onClick={reset}>Reset</button>
        <button className='btn' onClick={() => decrement(1)}>-1</button>
    </>
  )
}
