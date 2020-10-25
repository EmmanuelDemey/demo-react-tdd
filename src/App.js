import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./list/list";

function App() {
  const [todos, setTodos] = useState([{ label: 1, done: false }]);
  return (
    <List
      todos={todos}
      onAdd={(todo) => {
        setTodos([...todos, todo]);
      }}
      onCheck={(todo) => {
        setTodos(
          todos.map((t) => {
            if (todo.label === t.label) {
              return {
                ...todo,
                done: !todo.done,
              };
            }
            return t;
          })
        );
      }}
    />
  );
}

export default App;
