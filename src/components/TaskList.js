import React, { useState } from "react";
import Task from "./Task";

function TaskList({ tasks }) {
  const [tasksList, setTasksList] = useState(tasks);

  const handleDelete = (task) => {
    setTasksList(tasksList.filter((t) => t !== task));
  };

  return (
    <div className="tasks">
      {tasksList.map((task, index) => (
        <Task key={index} task={task} onDelete={handleDelete} />
      ))}
    </div>
  );
}

export default TaskList;