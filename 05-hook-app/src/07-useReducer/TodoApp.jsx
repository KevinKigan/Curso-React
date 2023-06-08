import { TodoList } from './TodoList'
import { TodoAdd } from './TodoAdd'
import { useTodos } from '../hooks'


export const TodoApp = () => {
    const {todos, todosCount, pendingTodosCount, handleNewTodo, handleDeleteTodo, handleToggleTodo} = useTodos();

    return (
        <>
            <h1>TodoApp: {todosCount} <small>pendientes: {pendingTodosCount()}</small></h1>

            <hr></hr>

            <div className='row'>
                <div className='col-7'>
                    <TodoList todos={todos} 
                    onDeleteTodo={handleDeleteTodo}
                    onToggleTodo={handleToggleTodo}></TodoList>
                </div>
                <div className='col-5'>
                    <h4>Agregar TODO</h4>
                    <hr></hr>
                    <TodoAdd onNewTodo={handleNewTodo}></TodoAdd>                    
                </div>

            </div>

        </>
    )
}
