import React, { useState } from "react";

function AddTask(props) {
  const [task, setTask] = useState("");

  function handleChange(event) {
    setTask(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.onAddTask(task);
    setTask("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a task"
        value={task}
        onChange={handleChange}
        className="p-2 border"
      />
      <button type="submit" className="bg-blue-500">Add</button>
    </form>
  );
}

export default AddTask;
