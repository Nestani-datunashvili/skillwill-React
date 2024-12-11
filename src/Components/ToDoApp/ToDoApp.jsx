import React, { Component } from "react";
import "./ToDoApp.css";
// import ToDoItems from "../../Components/ToDoItems/ToDoItems";
import InProgress from "../Inprogress/InProgress";

class ToDoApp extends Component {
  state = {
    inputValue: "",
    inProgress: [],
    doneTask: [],
  };

  value = (e) => {
    const value = e.target.value;
    this.setState({
      inputValue: value,
    });
  };

  addTodo = (e) => {
    e.preventDefault();

    const newInProgress = {
      id: this.state.inProgress.length + 1,
      task: this.state.inputValue,
    };

    this.setState({
      inProgress: [...this.state.inProgress, newInProgress],
      inputValue: "",
    });
  };

  remove = (id) => {
    const inProgress = this.state.inProgress.filter((task) => task.id !== id);
    const doneTask = this.state.doneTask.filter((task) => task.id !== id);

    this.setState({
      inProgress,
      doneTask,
    });
  };

  addToDone = (id) => {
    const taskToMove = this.state.inProgress.find((task) => task.id === id);
    const updatedInProgress = this.state.inProgress.filter(
      (task) => task.id !== id
    );

    if (taskToMove) {
      this.setState({
        inProgress: updatedInProgress,
        doneTask: [...this.state.doneTask, taskToMove],
      });
    }
  };

  render() {
    return (
      <div className="form-container">
        <form className="input-form" onSubmit={this.addTodo}>
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.value}
          />
          <button>Add Task</button>
        </form>
        <div className="tast-status--conatainer">
          <div className="inprogress-container">
            <h2>InProgress</h2>
            {this.state.inProgress.map((newTask) => (
              <InProgress
                key={newTask.id}
                id={newTask.id}
                task={newTask.task}
                remove={this.remove}
                add={this.addToDone}
              />
            ))}
          </div>

          <div className="done-container">
            <h2>Done</h2>
            {this.state.doneTask.map((newTask) => (
              <InProgress
                key={newTask.id}
                id={newTask.id}
                task={newTask.task}
                remove={this.remove}
                add={this.addToDone}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default ToDoApp;
