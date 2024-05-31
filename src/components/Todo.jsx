import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  const handleDelete = () => {
    deleteTodo(task.id);
  };

  const handleEdit = () => {
    editTodo(task.id);
  };

  return (
    <div className='Todo'>
      <p
        onClick={() => toggleComplete(task.id)}
        className={`${task.completed ? 'completed' : ''}`}
      >
        {task.task}
      </p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare} onClick={handleEdit} />
        <FontAwesomeIcon icon={faTrash} onClick={handleDelete} />
      </div>
    </div>
  );
};

export default Todo;
