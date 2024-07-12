import React, { useState } from 'react'

export const AddCategory = ({setCategories}) => {

    const [inputValue, setINputValue] = useState('Dragon Ball')

    const onINputChange = ({target}) => {
        setINputValue([target.value])
    }

    const onSubmit = (event) => {
        event.preventDefault()

         if( inputValue.toString().trim().length < 1) return 
            setCategories(categories => [inputValue, ...categories])
            setINputValue('')
    }

    return (
        <>
            <h2>Agregue una nueva categoria</h2>
            <form onSubmit={onSubmit}>
                <input 
                    type="text"
                    name='cate' 
                    placeholder="Buscar gifts" 
                    value={ inputValue } 
                    onChange={onINputChange} 
                />
            </form>
        </>
    )
}
