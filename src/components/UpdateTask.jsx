import React, { useState } from "react";

function UpdateTask(props) {
  const [newTask, setNewTask] = useState("");

  function handleChange(event) {
    setNewTask(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.onUpdateTask(props.id, newTask);
    setNewTask("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Update task"
        value={newTask}
        onChange={handleChange}
      />
      <button type="submit">Update</button>
    </form>
  );
}

export default UpdateTask;
