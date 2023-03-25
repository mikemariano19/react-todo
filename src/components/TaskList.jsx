import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ task }) {
  return (
    <div>
      <TaskItem
        key={task.id}
        task={task}
      />
    </div>
  )
}

export default TaskList;
