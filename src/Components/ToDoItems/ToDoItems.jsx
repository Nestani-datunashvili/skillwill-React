import React from "react";
import "./ToDoItems.css";

const ToDoItems = ({ id, task }) => {
  return (
    <div className="task-item">
      {id}: {task}
    </div>
  );
};

export default ToDoItems;
