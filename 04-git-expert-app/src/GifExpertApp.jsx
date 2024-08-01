import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

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
        onNewCategory={onAddCategory} />

        {
          categories.map(category => {
            return <GifGrid 
                      key={category} 
                      category={category} />
          })
        }
    </>
  )
}
