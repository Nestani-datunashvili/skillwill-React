import React from "react";
import ToDoItems from "../ToDoItems/ToDoItems";

const DoneTasks = ({ id, task, remove }) => {
  return (
    <div>
      <ToDoItems id={id} task={task} />
      <button onClick={() => remove(id)}>Delete Done one</button>
    </div>
  );
};

export default DoneTasks;
