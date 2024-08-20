import { useReducer } from 'react'
import { todoReducer } from './todoReducer'
import { TodoList } from './TodoList'
import { TodoAdd } from './TodoAdd'

const initialState = [
    {
        id: new Date().getTime(),
        description: 'Aprender React',
        done: false,
    },
    {
        id: new Date().getTime() * 3,
        description: 'Estudiar React',
        done: false,
    },
]


export const TodoApp = () => {

    const [state, dispatch] = useReducer(todoReducer, initialState)

    const handleNewTodo = (todo) => {

        console.log('handleNewTodo', todo)
  
    }

    return (
        <>
            <h1>TodoApp: 10, <small>pendientes: 2</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">

                    {/* TodoList */}
                    
                    <TodoList state={state}/>

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
