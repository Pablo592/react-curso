import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useForm } from '../hooks/useForm'

export const FormWithCustomHook = () => {

    const {formState, onInputChange,onResetForm,username, email, password} = useForm(
        {
            username: '',
            email: '',
            password: ''
        })

    
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
            <h1>Formulario con custom Hook</h1>

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

            <input
                type="password"
                className='form-control m-2'
                placeholder='Contraseña'
                name='password'
                value={password}
                onChange={onInputChange}
            />

            <button onClick={onResetForm} className='btn btn-primary mt-2'>Borrar</button>

        </>
    )
}
