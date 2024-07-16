import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'

export const GifExpertApp = () => {


  const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball', 'Naruto'])

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return
    setCategories(categories => [newCategory, ...categories])
  }

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory

        //setCategories={setCategories}
        onNewCategory={onAddCategory}
      />



      <ol>
        {
          categories.map(category => {
            return <li key={category}>{category}</li>
          })
        }
      </ol>
    </>
  )
}
