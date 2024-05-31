import React, {useState} from 'react'

const TodoForm = ({addTodo}) => {
    const [value,setValue]=useState("")
    const handleChange=e=>{
        setValue(e.target.value);
    }
    const handleSubmit=e=>{
      e.preventDefault();
      if (!value.trim()) return; 

      addTodo(value);
      setValue("");
    }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type='text' className='todo-input' placeholder="What do you want to add to the To-Do List?" onChange={handleChange} value={value} />
        <button className='submit'> Add Task </button>
    </form>
  )
}

export default TodoForm