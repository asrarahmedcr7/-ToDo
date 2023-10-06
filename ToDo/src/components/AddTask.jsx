import { useState } from "react";
export default function AddTask({tasks, setTasks}) {
    const [text, setText] = useState("");
    return (
        <div className="container">
            <input className="input" value = {text} onChange={(e) => setText(e.target.value)} placeholder="Enter a Task"></input>
            <button className="addButton" onClick={() => {
                setTasks([...tasks, {id:tasks.length, text : text}]);
                setText("");
                }}>Add</button>
        </div>
    )
}