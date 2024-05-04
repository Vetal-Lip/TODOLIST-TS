import React, { useState } from "react";
import "./App.css";
import { TaskType, TodoList } from "./TodoList";

export type FilterValuesType = "all" | "completed" | "active";

function App() {
  let [tasks, setTasks] = useState<Array<TaskType>>([
    { id: 1, title: "CSS", isDone: true },
    { id: 2, title: "JS", isDone: true },
    { id: 3, title: "React", isDone: false },
    { id: 4, title: "Redux", isDone: false },
  ]);

  let [filter, setFilter] = useState<FilterValuesType>("all");

  function removeTask(id: number) {
    let filtredTasks = tasks.filter((t) => t.id !== id);
    setTasks(filtredTasks);
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
      />
    </div>
  );
}

export default App;
