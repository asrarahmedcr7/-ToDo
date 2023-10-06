import { useState } from "react";

export default function TaskList({tasks, setTasks}) {

    const handleChange = (nextTodo) => {
        setTasks(tasks.map(task => {
            if(task.id === nextTodo.id) return nextTodo;
            return task;
        }))
    }

    return (
        <ul>
            {tasks.map(task => <Task key = {task.id} task = {task} handleChange={handleChange}></Task>)}
        </ul>
    )
}

function Task({task, handleChange}) {
    const [isEditing, setIsEditing] = useState(false);
    return (
        <li key={task.id}>{isEditing ? <input className="edit-input" value = {task.text} onChange = {(e) => handleChange({...task, text : e.target.value})}></input> 
        : <h2>{task.text}</h2>}<button className="editButton" onClick={() => setIsEditing(!isEditing)}>{isEditing ? "Save" : "Edit"}</button></li>
    )
}