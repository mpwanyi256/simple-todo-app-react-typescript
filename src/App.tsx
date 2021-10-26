import React, { useState } from 'react';

import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import { Todo } from './types/modelTypes/todo.model';

const App: React.FC = ()=> {
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodoItem = (text: string) => {
    setTodos(prevTodos => 
      [...prevTodos, { id: prevTodos.length + 1,text }]
    );
  }

  const deleteTodoHandler = (todoId: number)=> {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== todoId))
  }

  return (
    <div className="App">
      <NewTodo add={addTodoItem} />
      <TodoList items={todos} deleteTodo={deleteTodoHandler} />
    </div>
  );
}

export default App;
