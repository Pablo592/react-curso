import React from 'react'
import { useEffect } from 'react'

export const Message = () => {

    useEffect(() => {
      console.log('Mensaje montado')
    
      return () => {
        console.log('Mensaje desmontado')
      }
    }, [])
    


  return (
    <>
    <h1>Usuario ya existe</h1>
    </>
  )
}
