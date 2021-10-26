import React from 'react';
import { Todo } from '../types/modelTypes/todo.model';
import { deleteTodoFunction } from '../types/functionTypes/deleteTodoFunction.model';
import './TodoList.css'

interface TodocListProps {
    items: Todo[]
    deleteTodo: deleteTodoFunction
}

const TodoList: React.FC<TodocListProps> = (props) => {
    
    return <ul>
        { 
            props.items.map(
            todo => <li key={todo.id}>
                    <span>{todo.text}</span>
                    <button
                        className="delete-btn"
                        onClick={props.deleteTodo.bind(null, todo.id)}>
                            DELETE
                    </button>
                </li> 
            ) 
        }
    </ul>;
}

export default TodoList;
