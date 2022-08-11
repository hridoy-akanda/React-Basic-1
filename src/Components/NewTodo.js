import React, { useState } from "react";
import style from "./NewTodo.module.css";

const NewTodo = (props) => {
  const [todo, setTodo] = useState({ title: "", desc: "" });
  const { title, desc } = todo;

  const handleChange = (e) => {
    setTodo((oldTodo) => {
      return { ...oldTodo, [e.target.name]: e.target.value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    setTodo({ title: "", desc: "" });
    props.onAddTodo(todo);
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <div className={style.formSection}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={handleChange}
        />
      </div>
      <div className={style.formSection}>
        <label htmlFor="desc">Description:</label>
        <textarea
          name="desc"
          id="desc"
          value={desc}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className={style.btn}>
        <button type="submit">Add Todo</button>
      </div>
    </form>
  );
};

export default NewTodo;
