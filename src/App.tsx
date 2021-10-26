import React, { useState } from 'react';

import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import { Todo } from './types/modelTypes/todo.model';

const App: React.FC = ()=> {
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodoItem = (text: string) => {
    setTodos(prevTodos => 
      [{ id: Math.random(),text, status: 0 }, ...prevTodos]
    );
  }

  const markAsDoneHandler = (TODO: Todo)=> {
    setTodos(prevTodos => 
      [
        ...prevTodos.filter(todo => todo.id !== TODO.id), 
        { ...TODO, status: 1 }
      ]
    )
  }

  const deleteTodoHandler = (TODO: Todo)=> {
    setTodos(prevTodos => [...prevTodos.filter(todo => todo.id !== TODO.id)])
  }

  return (
    <div className="App">
      <NewTodo add={addTodoItem} />
      <TodoList items={todos} markdone={markAsDoneHandler} deleteTodo={deleteTodoHandler} />
    </div>
  );
}

export default App;
