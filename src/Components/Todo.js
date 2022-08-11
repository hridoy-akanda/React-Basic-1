import React from "react";
import style from "./Todo.module.css";

const Todo = (props) => {
  const { id } = props;

  const handleClick = (id) => {
    props.onRemoveTodo(id);
  };

  return (
    <div className={style.todo}>
      <div>
        <h2>{props.todo.title}</h2>
        <p>{props.todo.desc}</p>
      </div>
      <div>
        <button
          onClick={() => {
            handleClick(id);
          }}
        >
          <i class="fa fa-trash fa-2x"></i>
        </button>
      </div>
    </div>
  );
};

export default Todo;
