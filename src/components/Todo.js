import Form from "./Todo/Form";
import List from "./Todo/List";

function Todo() {
  return (
    <div className="todo">
      <h2>To do list</h2>
      <Form />
      <List />
    </div>
  );
}

export default Todo;
