import React from "react";

function DeleteTask(props) {
  function handleDelete() {
    props.onDeleteTask(props.id);
  }

  return (
    <button onClick={handleDelete}>Delete</button>
  );
}

export default DeleteTask;
