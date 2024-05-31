import React, { useState } from 'react';

const EditTodoForm = ({ task, updateTodo }) => {
  const [input, setInput] = useState(task.task);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTodo(task.id, input);
  };

  return (
    <form className='EditTodoForm' onSubmit={handleSubmit}>
      <input
        type='text'
        className='todo-input'
        value={input}
        onChange={handleChange}
      />
      <button className='esubmit'>Update Task</button>
    </form>
  );
};

export default EditTodoForm;
