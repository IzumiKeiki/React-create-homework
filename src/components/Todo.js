import { useState } from "react";

import Form from "./Todo/Form";
import List from "./Todo/List";

function Todo() {
  const defaultInput = "Enter a todo...";
  const defautlTasks = ["task 1", "task 2", "task 3"];

  const [todos, setTodos] = useState(defautlTasks);

  const createNewTask = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <div className="todo">
      <h2>To do list</h2>
      <Form input={defaultInput} create={createNewTask} />
      <List tasks={todos} />
    </div>
  );
}

export default Todo;
