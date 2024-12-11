import React from "react";
import ToDoItems from "../ToDoItems/ToDoItems";
import "./Inprogress.css";

const InProgress = ({ id, task, remove, add }) => {
  return (
    <div className="inProgress-container">
      <ToDoItems id={id} task={task} remove={remove} add={add} />
      <div className="tasks-buttons">
        <button onClick={() => add(id)}>Done</button>
        <button onClick={() => remove(id)}>Delete</button>
      </div>
    </div>
  );
};

export default InProgress;
