function List({ tasks, remove }) {
  const deleteTodo = (id) => {
    remove(id);
  };

  return (
    <div className="todo-list">
      <ul>
        {tasks.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
