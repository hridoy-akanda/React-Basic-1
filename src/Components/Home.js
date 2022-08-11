import React, { useState } from "react";
import Todos from "./Todos";
import { v4 as uuidv4 } from "uuid";
import style from "./Home.module.css";
import NewTodo from "./NewTodo";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const handleAddTodo = (todo) => {
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), todo }];
    });
  };

  const removeTodo = (id) => {
    let filteredTodo = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(filteredTodo);
  };

  return (
    <div className={style.container}>
      <h1>Todo App</h1>
      <NewTodo onAddTodo={handleAddTodo} />
      <Todos todos={todos} onRemoveTodo={removeTodo} />
    </div>
  );
};

export default Home;
