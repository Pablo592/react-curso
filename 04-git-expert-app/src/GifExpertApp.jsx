import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'

export const GifExpertApp = () => {


  const [Categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball', 'Naruto'])

  const agregarCategoria = () => {

    const cate = document.querySelector('input[name="cate"]')
    console.log(cate.value)

    setCategories([...Categories, cate.value])
  }


  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory setCategories={agregarCategoria}/>
        


        <ol>
          {
            Categories.map( category => {
              return <li key={category}>{category}</li>
            })
          }
        </ol>
    </>
  )
}
