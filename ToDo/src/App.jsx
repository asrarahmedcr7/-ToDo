import './App.css'
import TaskList from './components/TaskList'
import AddTask from './components/AddTask';
import { useState } from 'react';

import Box from './components/Box';
import List from './components/List';

let initialTasks = []

function App() {
  const [tasks, setTasks] = useState(initialTasks);

  return (
    <>
      <h1 className = 'myHeading'>#TO-DO</h1>
      {/* <AddTask tasks = {tasks} setTasks = {setTasks}></AddTask>
      <TaskList tasks = {tasks} setTasks = {setTasks}></TaskList> */}
      <Box tasks = {tasks} setTasks = {setTasks}></Box>
      <List tasks = {tasks} setTasks = {setTasks}></List>
    </>
  )
}

export default App
