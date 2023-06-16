import { useState, useEffect } from "react";

import Form from "./Todo/Form";
import List from "./Todo/List";

function Todo() {
  const defaultInput = "Enter a todo...";
  const defautlTasks = ["task 1", "task 2", "task 3"];

  const [todos, setTodos] = useState(defautlTasks);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const createNewTask = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTask = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="todo">
      <h2>To do list</h2>
      <Form input={defaultInput} create={createNewTask} />
      <List tasks={todos} remove={deleteTask} />
    </div>
  );
}

export default Todo;
