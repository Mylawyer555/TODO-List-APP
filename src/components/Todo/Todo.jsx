import React, { useEffect } from 'react'
import './Todo.css'
import { useState } from 'react'


const Todo = () => {
    
    
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [showInput, setShowInput] = useState(false);
  
  useEffect
  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  }

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks(tasks => [...tasks, newTask]);
      setNewTask("");
    }
    setShowInput(false)
  }

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((elem, i) => i !== index);
    setTasks(updatedTasks);
  }
  

  
  return (
    <>
      <div className="Todo-wrapper"  >
        <div className="up">
        <h1>To-Do-list</h1>
          
        </div>
        <div className="down">
        {showInput &&  <div className="input-txt">
            <input
              type="text"
              placeholder='Enter a task..'
              value={newTask}
              onChange={(handleInputChange)}
            />

            <button className='addButton' onClick={addTask}>ADD</button>
          </div> }
          
        
          <div className="tasks">
            <h4>Today's Task</h4>
            {tasks.map((task, index) =>
              
              <div className="loop-task" key={index}>
                <p className='task-txt'>
                  {task}
                </p>

                <button className='delete-btn' onClick={() => deleteTask(index)}>delete</button>             
              </div>
            
            )}
          </div>

          <div className="plus" onClick={() => setShowInput(true)}>
            <h4>+</h4>
        </div>
        </div>
      </div>
        
    </>
  );
}

export default Todo