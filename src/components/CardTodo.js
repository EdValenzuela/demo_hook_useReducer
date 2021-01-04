import React from "react";

const CardTodo = ({ todo, i, handleToggle, handleDelete }) => {
  return (
    <li
      style={{
        display: "flex",
        marginBottom: "30px",
        justifyContent: "space-between",
      }}
    >
      <p
        onClick={() => handleToggle(todo.id)}
        style={{
          textDecoration: todo.done ? "line-through" : "none",
          cursor: "pointer",
          fontSize: '1.25rem'
        }}
      >
        {i + 1}.{todo.desc}
      </p>
      <button
        onClick={() => handleDelete(todo.id)}
        style={{
          background: "red",
          padding: "10px 15px",
          margin: "0 0 0 15px",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Borrar
      </button>
    </li>
  );
};

export default CardTodo;
