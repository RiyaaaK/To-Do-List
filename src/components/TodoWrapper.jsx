import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import EditTodoForm from './EditTodoForm';
import { v4 as uuidv4 } from 'uuid';

const TodoWrapper = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [showCompleted, setShowCompleted] = useState(true);
  const [sortOrder, setSortOrder] = useState('asc'); 

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (task) => {
    setTodos([...todos, { id: uuidv4(), task, completed: false, isEditing: false }]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const updateTodo = (id, newTask) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task: newTask, isEditing: false } : todo
      )
    );
  };

  const sortTodos = () => {
    const sortedTodos = [...todos].sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.task.localeCompare(b.task);
      } else {
        return b.task.localeCompare(a.task);
      }
    });
    setTodos(sortedTodos);
  };

  const filteredTodos = showCompleted ? todos : todos.filter(todo => !todo.completed);

  return (
    <div>
      <div>
       
        <label className='filter'>
          <input
            type="checkbox"
            checked={showCompleted}
            onChange={() => setShowCompleted(!showCompleted)}
          />
          Show completed tasks
        </label>
        <button className='sort' onClick={() => {setSortOrder('asc'); sortTodos();}}>Sort A-Z</button>
        <button className='sort' onClick={() => {setSortOrder('desc'); sortTodos();}}>Sort Z-A</button>
      </div>
      <TodoForm addTodo={addTodo} />
      {filteredTodos.map((todo) =>
        todo.isEditing ? (
          <EditTodoForm key={todo.id} task={todo} updateTodo={updateTodo} />
        ) : (
          <Todo
            key={todo.id}
            task={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
};

export default TodoWrapper;
