import React from 'react'
import './Todo.css'
import  {useState} from 'react'

const Todo = () => {
    
    
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [editing, setEditing] = useState(false);
    const [currentIndex, setCurrentIndex] = (null);
    const [updatedText, setUpdatedText] = ("");


    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTasks(tasks=> [...tasks, newTask]);
             setNewTask("");
        }

        
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((elem, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index) {
        
    }

    function moveTaskDown(index) {
        
    }

    function editTasks(index) {
        setEditing(true);
        setCurrentIndex(index);
        setUpdatedText(tasks[index]);
    };

    function handleSaveTask () {
        const handleNewUpdate = tasks.map((task, index) =>
            index === currentIndex ? setUpdatedText : task
        )

        setTasks(handleNewUpdate);
        setEditing(false);
        setCurrentIndex(null);
        setUpdatedText("")
       

    }

    const filterTasks = tasks.filter((task) =>
        task.toLowerCase().includes(searchQuery.toLowerCase())
    );


  return (
    <div className="Todo-wrapper">
      <h1>To-Do-list</h1>
      <div className="down">
        <div className="input-txt">
          <input
            type="text"
            placeholder="Enter New task"
            value={newTask}
            onChange={handleInputChange}
          />
          <button className="addButton" onClick={addTask}>
            ADD
          </button>
        </div>

        <div className="tasks">
          {filterTasks.map((task, index) => (
            <div className="loop-task" key={index}>
              {editing && currentIndex === index ? (
                <input
                  type="text"
                  value={updatedText}
                  onChange={(e) => setUpdatedText(e.target.value)}
                />
              ) : (
                task
              )}

              {editing && currentIndex === index ? (
                <button onClick={handleSaveTask}>Done</button>
              ) : (
                <>
                  <button className="edit-btn" onClick={() => editTasks(index)}>
                    Edit
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => deleteTask(index)}
                  >
                    Delete
                  </button>
                </>
              )}

              {/* <span className="span-txt">{task}</span> */}
              
            </div>
          ))}
        </div>

        <div className="round-plus">
          <h1>+</h1>
        </div>
      </div>
    </div>
  );
}

export default Todo