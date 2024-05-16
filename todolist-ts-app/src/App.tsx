import React, { useState } from "react";
import "./App.css";
import { TaskType, TodoList } from "./TodoList";
import { v1 } from "uuid";

export type FilterValuesType = "all" | "completed" | "active";

function App() {
  let [tasks, setTasks] = useState<Array<TaskType>>([
    { id: v1(), title: "CSS", isDone: true },
    { id: v1(), title: "JS", isDone: true },
    { id: v1(), title: "React", isDone: false },
    { id: v1(), title: "Redux", isDone: false },
  ]);

  let [filter, setFilter] = useState<FilterValuesType>("all");

  function removeTask(id: string) {
    let filtredTasks = tasks.filter((t) => t.id !== id);
    setTasks(filtredTasks);
  }

  function addTask(title: string) {
    let newTask = { id: v1(), title: title, isDone: false };
    let newTasks = [newTask, ...tasks];
    setTasks(newTasks);
  }

  function changeStatus(taskId: string, isDone: boolean) {
    let task = tasks.find((t) => t.id === taskId);
    if (task) {
      task.isDone = isDone;
    }
    let copy = [...tasks];
    setTasks(copy);
  }

  function changeFilter(value: FilterValuesType) {
    setFilter(value);
  }

  let tasksForToDolist = tasks;
  if (filter === "completed") {
    tasksForToDolist = tasks.filter((t) => t.isDone === true);
  }
  if (filter === "active") {
    tasksForToDolist = tasks.filter((t) => t.isDone === false);
  }

  return (
    <div className="App">
      <TodoList
        title="What to learn?"
        tasks={tasksForToDolist}
        removeTask={removeTask}
        changeFilter={changeFilter}
        addTask={addTask}
        changeTaskStatus={changeStatus}
        filter={filter}
      />
    </div>
  );
}

export default App;
