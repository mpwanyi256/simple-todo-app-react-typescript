import React, { useRef } from 'react';
import { addTodoFunction } from '../types/functionTypes/addTodoFunction.model';
import './NewTodo.css'

interface newTodoProps {
    add: addTodoFunction
}

const NewTodo: React.FC<newTodoProps> = (props) => {

    const textInputRef = useRef<HTMLInputElement>(null)
    const formElementRef = useRef<HTMLFormElement>(null)

    const addTodoFormHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredText = textInputRef.current?.value as string;
        props.add(enteredText)
        formElementRef.current!.reset()
        textInputRef.current!.focus()
    }

    return (
        <div className="new-todo">
            <form ref={formElementRef} onSubmit={addTodoFormHandler}>
                <div className="form-control">
                    <label htmlFor="todo-text">To do text</label>
                    <input type="text" id="todo-text" ref={textInputRef} />
                </div>
                <button type="submit">ADD TODO</button>
            </form>
        </div>
    );
}

export default NewTodo;
