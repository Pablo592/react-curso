import React from 'react'
import { getGifs } from '../helpers/getGifs'




export const GifGrid = ({ category }) => {


    getGifs()


  return (

    <>
        <h3>{ category }</h3>
    </>
    
  )
}
