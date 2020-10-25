import React, { useState, useCallback } from "react";
import ListItem from "../list-item/list-item";

export default ({ todos, onCheck, onAdd }) => {
  const [newValue, setNewValue] = useState("");
  const onSearchCallback = useCallback((e) => {
    setNewValue(e.target.value);
  }, []);
  const onAddCallback = useCallback(
    (e) => {
      onAdd({ label: newValue });
      setNewValue("");
    },
    [newValue, onAdd]
  );

  if (!todos || todos.length === 0) return null;
  return (
    <>
      <input type="search" value={newValue} onChange={onSearchCallback} />
      <button disabled={newValue === ""} onClick={onAddCallback}>
        add
      </button>
      <ul>
        {todos.map((todo, index) => (
          <ListItem key={index} todo={todo} onCheck={onCheck} />
        ))}
      </ul>
    </>
  );
};
