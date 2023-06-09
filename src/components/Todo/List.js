function List({ tasks }) {
  return (
    <div className="todo-list">
      <ul>
        {tasks.map((todo, index) => (
          <li key={index}>
            {todo}
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
