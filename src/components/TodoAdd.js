import React, { useState } from 'react'

const TodoAdd = ({handleAddTodo}) => {

    const [description, saveDescription] = useState('');

    const handleSubmit = e =>{
        e.preventDefault();
        if(!description){
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };

        handleAddTodo(newTodo);

        saveDescription('');
    }

    return (
        <>
            <h1 style={{fontSize: '1.5rem'}}>Agregar Todo</h1>
            <br/>
            <form
                onSubmit={handleSubmit}
                >
                <input
                    style={{width: '100%', margin:'0 0 15px 0'}}
                    type="text"
                    name="description"
                    placeholder="Aprender ..."
                    autoComplete="off"
                    value={description}
                    onChange={ (e) => saveDescription(e.target.value) }
                />
                <button 
                    type="submit"
                    style={{width: '100%', background: 'green', padding: '10px 15px', color: 'white', border: 'none', cursor: 'pointer', fontSize: '1.25rem'}}>
                    Agregar
                </button>
            </form>
        </>
    )
}

export default TodoAdd
