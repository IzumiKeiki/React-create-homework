import { useState } from "react";

function Form({ input, create }) {
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (inputValue.trim() !== "") {
      create(inputValue);
      setInputValue("");
    }
  };

  return (
    <div className="todo-form">
      <input
        type="text"
        placeholder={input}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
}

export default Form;
