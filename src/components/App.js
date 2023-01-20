import React, { useState } from "react"
import CategoryFilter from "./CategoryFilter"
import NewTaskForm from "./NewTaskForm"
import TaskList from "./TaskList"

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with")
console.log({ CATEGORIES, TASKS })

function App() {
  const [tasks, setTasks] = useState(TASKS)

  function handleFilter(selectedCategory) {
    if(selectedCategory === 'All') return tasks
    return tasks.filter(task => task.category === selectedCategory)
  }

  function handleNewTask(newTask) {
    setTasks([...tasks, newTask])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} tasks={tasks} onFilter={handleFilter} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleNewTask} />
      <TaskList tasks={tasks}/>
    </div>
  );
}

export default App

