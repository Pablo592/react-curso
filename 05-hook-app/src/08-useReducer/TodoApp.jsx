import { useReducer } from 'react'
import { todoReducer } from './todoReducer'

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

    return (
        <>
            <h1>TodoApp: 10, <small>pendientes: 2</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <ul className='list-group'>
                        <li className='list-group-item d-flex justify-content-between'>
                            <span className='align-self-center' >Item 1</span>
                            <button className='btn btn-danger'>Borrar</button>
                        </li>
                        <li className='list-group-item d-flex justify-content-between'>
                            <span className='align-self-center' >Item 2</span>
                            <button className='btn btn-danger'>Borrar</button>
                        </li>
                        <li className='list-group-item d-flex justify-content-between'>
                            <span className='align-self-center' >Item 3</span>
                            <button className='btn btn-danger'>Borrar</button>
                        </li>
                    </ul>
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <form>
                        <input
                            type="text"
                            name="description"
                            className="form-control"
                            placeholder="Aprender..."
                            autoComplete="on"
                        />
                        <button
                            type="submit"
                            className="btn btn-outline-primary mt-1 btn-block"
                        >
                            Agregar
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}
