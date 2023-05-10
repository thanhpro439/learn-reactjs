import React from "react";
import TodoList from "./components/Todolist";

function TodoFeature(props) {
  const todoList = [
    { id: 1, title: "Eat" },
    {
      id: 2,
      title: "Code",
    },
    {
      id: 3,
      title: "Sleep",
    },
  ];

  return (
    <div>
      <h3>Todo List</h3>
      <TodoList todoList={todoList} />
    </div>
  );
}

export default TodoFeature;
