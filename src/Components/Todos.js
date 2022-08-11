import React from "react";
import Todo from "./Todo";
import style from "./Todos.module.css";

const Todos = (props) => {
  return (
    <div className={style.card}>
      {props.todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            todo={todo.todo}
            id={todo.id}
            onRemoveTodo={props.onRemoveTodo}
          />
        );
      })}
    </div>
  );
};

export default Todos;
