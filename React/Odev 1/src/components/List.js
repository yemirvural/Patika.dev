import React from "react";

function List({ tasks }) {
  return (
    <>
      {tasks.map((task) => (
        <label>{task}</label>
      ))}
    </>
  );
}

export default List;
