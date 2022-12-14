import React, { useState } from "react";

function Footer({ tasks, taskLength }) {
  const showAll = () =>{
    console.log(tasks)
  }
  const showActive= () =>{
    console.log("show active")
  }
  const showCompleted = () =>{
    console.log("show completed")
  }
  
  const filtered = tasks.filter(employee => {
    return employee.country === 'Canada';
  });

  return (
    <div className={taskLength === 0 ? 'hidden' : taskLength}>
      <footer className="footer">
        <span className="todo-count">
          <strong>{taskLength}</strong>
          items left
        </span>

        <ul className="filters">
          <li>
            <a href="#/" className="selected" onClick={() => showAll()}>All</a>
          </li>
          <li>
            <a href="#/"  onClick={() => showActive()}>Active</a>
          </li>
          <li>
            <a href="#/"  onClick={() => showCompleted()}>Completed</a>
          </li>
        </ul>

        <button className="clear-completed">Clear completed</button>
      </footer>
    </div>
  );
}

export default Footer;
