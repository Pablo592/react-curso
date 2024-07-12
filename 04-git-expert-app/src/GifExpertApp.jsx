import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'

export const GifExpertApp = () => {


  const [Categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball', 'Naruto'])


  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory setCategories={setCategories}/>
        


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
