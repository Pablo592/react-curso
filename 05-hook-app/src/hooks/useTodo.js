import { useReducer } from 'react'
import { todoReducer } from '../08-useReducer/todoReducer.js'
import { useEffect } from 'react'

export const useTodo = () => {

    const initialState = [
        //  {
        //      id: new Date().getTime(),
        //      description: 'Aprender React',
        //      done: false,
        //  }
    ]

    const init = () => {

        return JSON.parse(localStorage.getItem('todos')) || []
    }

    const [state, dispatch] = useReducer(todoReducer, initialState, init)


    useEffect(() => {

        localStorage.setItem('todos', JSON.stringify(state))


    }, [state])


    const handleNewTodo = (todo) => {

        const action = {
            type: 'add',
            payload: todo
        }

        dispatch(action)

        console.log('handleNewTodo', todo)

    }

    const handleDeleteTodo = (id) => {

        const action = {
            type: 'delete',
            payload: id
        }

        dispatch(action)

        console.log('handleDeleteTodo', id)

    }

    const handleToggleTodo = (id) => {

        const action = {
            type: 'toggle',
            payload: id
        }

        dispatch(action)

        console.log('onToggleTodo', id)
    }

    return {
        state,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo
    }

}