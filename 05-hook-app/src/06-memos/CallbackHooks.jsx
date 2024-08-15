import { useState } from 'react'
import { ShowIncrement } from './ShowIncrement'
import { useCallback } from 'react'

export const CallbackHooks = () => {


    const [counter, setCounter] = useState(10)

    const incrementFather = useCallback(
      (aumento) => {
        setCounter((value)=> value + aumento)
      },
      [],
    )
    

    //const increment = () => {
    //    setCounter(counter + 1)
    //}

  return (
    <>
        <h1>useCallback Hook: {counter}</h1>
        <hr />

        <ShowIncrement increment={incrementFather} />    
    </>
  )
}
