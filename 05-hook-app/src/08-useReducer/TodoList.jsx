import { TodoItem } from './TodoItem'

export const TodoList = ({state}) => {
    return (
        <ul className='list-group'>
            {
                state.map(todo => (
                   
                    <TodoItem key={todo.id} todo={todo} />
                    
                ))
            }
        </ul>
    )
}
