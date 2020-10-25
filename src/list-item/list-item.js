import React from "react";

export default ({ todo, onCheck }) => {
  return (
    <li>
      {todo.label}
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => {
          onCheck(todo);
        }}
      />
    </li>
  );
};
