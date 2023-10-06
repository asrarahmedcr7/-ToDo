import { useState } from "react"
export default function Box({tasks, setTasks}) {
    

    const [text, setText] = useState("");
    
    const priorities = ["chill", "Do it", "You're gonna die if u don't do it."]

    return (
        <div className = "Container">
            <input type = "text" name = "input" placeholder="What do u want to do ?" value = {text} onChange={(e) => setText(e.target.value)}/>
            <button className = "addButton" onClick = {() => {
                setTasks([...tasks, {id : tasks.length, text : text, priority : 1}]);
                setText("");
            }}>Add</button>
        </div>
    )
}