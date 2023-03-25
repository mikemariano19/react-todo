import React, { useState } from "react";

function EditMode(props) {
  const [editMode, setEditMode] = useState(false);
  const [newTask, setNewTask] = useState(props.task);

  function handleEdit() {
    setEditMode(true);
  }

  function handleChange(event) {
    setNewTask(event.target.value);
  }

  function handleCancel() {
    setEditMode(false);
    setNewTask(props.task);
  }

  function handleSave() {
    props.onSaveTask(props.id, newTask);
    setEditMode(false);
  }

  return (
    <div>
      {!editMode ? (
        <div>
          <span>{props.task}</span>
          <button onClick={handleEdit}>Edit</button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            value={newTask}
            onChange={handleChange}
          />
          <button onClick={handleCancel}>Cancel</button>
          <button onClick={handleSave}>Save</button>
        </div>
      )}
    </div>
  );
}

export default EditMode;
