import { useState } from "react";

export default function List({tasks, setTasks}) {

    const handleChange = (nextTask) => {
        setTasks(tasks.map(task => {
            if(task.id === nextTask.id) return nextTask;
            return task;
        }))
    }

    return (
        <div className = "ListContainer">
            {tasks.map(task => <Task key = {task.id} task = {task} handleChange={handleChange}></Task>)}
        </div>
    )
}

function Task({task, handleChange}) {
    const [isEditing, setIsEditing] = useState(false);
    return (
        <div className = "ListItem" key={task.id}>{isEditing ? <input className="edit-input" value = {task.text} onChange = {(e) => handleChange({...task, text : e.target.value})}></input> : <h2 className="task">{task.text}</h2>}<button className="editButton" onClick={() => setIsEditing(!isEditing)}>{isEditing ? "Save" : "Edit"}</button></div>
    )
}