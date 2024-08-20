import { useReducer } from 'react'
import { todoReducer } from './todoReducer'
import { TodoList } from './TodoList'
import { TodoAdd } from './TodoAdd'
import { useEffect } from 'react'

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


export const TodoApp = () => {

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

    return (
        <>
            <h1>TodoApp: 10, <small>pendientes: 2</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">

                    {/* TodoList */}
                    
                    <TodoList state={state} onDeleteTodo={handleDeleteTodo} onToggleTodo={handleToggleTodo}/>

                    {/* TodoList */}
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    {/* TodoAdd onNewTodo( todo ) */}
                    {/* { id: new Date()..., description: '', done: false } */}
                    
                    <TodoAdd onNewTodo={handleNewTodo}/>


                    {/*Fin  TodoAdd */}
                </div>
            </div>
        </>
    )
}
