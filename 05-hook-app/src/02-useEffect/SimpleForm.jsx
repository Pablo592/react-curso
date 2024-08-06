import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Message } from './Message'

export const SimpleForm = () => {


    const [formState, setFormState] = useState({

        username: 'strider2021',
        email: 'pepito@gmail.com'
    })

    const { username, email } = formState

    const onInputChange = ({ target }) => {
        const { name, value } = target
        // console.log(name, value)
        setFormState({
            ...formState,
            [name]: value
        })
    }

    useEffect(() => {
        console.log('useEffect llamado')
    }, [])


    useEffect(() => {
        console.log('formState cambió')
    }, [formState])


    useEffect(() => {
        console.log('email cambió')
    }, [email])


    return (
        <>
            <h1>Formulario simple</h1>

            <hr />

            <input
                type="text"
                className='form-control m-2'
                placeholder='Username'
                name='username'
                value={username}
                onChange={onInputChange}
            />

            <input
                type="text"
                className='form-control m-2'
                placeholder='pepito@gmail.com'
                name='email'
                value={email}
                onChange={onInputChange}
            />

            {username === 'strider2021' && <Message />}
        </>
    )
}
