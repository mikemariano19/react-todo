import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, deleteTask, toggleTask, enterEditMode }) {
  return (
    <ul>
      {tasks.sort((a, b) => b.id - a.id).map(task => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
          enterEditMode={enterEditMode}
      />
      ))
      }
    </ul>
    
  )
}

export default TaskList;
