import React, { useEffect, useReducer } from 'react';
import CardMessage from './CardMessage';
import CardTodo from './CardTodo';
import TodoAdd from './TodoAdd';

import { todoReducer } from './TodoReducer';
import { ADD, DELETE, TOGGLE } from './TodoAction';

const init = () =>{
    // return [{
    //     id: new Date().getTime(),
    //     desc: 'Aprender React',
    //     done: false
    // }];

    return JSON.parse(localStorage.getItem('todos')) || [];
}

const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect( ()=>{
        localStorage.setItem('todos', JSON.stringify(todos));
    },[todos] );

    const handleDelete = todoId => {
        const action = {
            type: DELETE,
            payload: todoId
        }

        dispatch(action);
    }

    const handleToggle = todoId => {
        dispatch({
            type: TOGGLE,
            payload: todoId
        })
    }

    const handleAddTodo = newTodo => {
        dispatch({
            type: ADD,
            payload: newTodo
        })
    }
    
    return (
        <div style={{padding: '1rem'}}>
            <h1>TodoApp ({todos.length})</h1>
            <hr />

            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <ul>
                    {
                        todos.length === 0 ? (
                            <CardMessage message="No hay tareas en el TodoApp" />
                        ):
                        (todos.map( (todo, i) => (
                            <CardTodo 
                                key={todo.id} 
                                todo={todo} 
                                i={i} 
                                handleDelete={handleDelete} 
                                handleToggle={handleToggle} 
                            />
                        )))
                    }
                </ul>
                <div>
                    <TodoAdd handleAddTodo={handleAddTodo} />
                </div>
            </div>
        </div>
    )
}

export default TodoApp
