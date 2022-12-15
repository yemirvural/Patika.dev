import React, { useState } from "react";

function Footer({ tasks, taskLength, removeTask, isCompleted, showAll, showActive, showCompleted }) {
  const ahmet = () => {
    tasks.forEach((e) => e.filter((a) => a.completed != false));
  };

  return (
    <div className={taskLength === 0 ? "hidden" : taskLength}>
      <footer className="footer">
        <span className="todo-count">
          <strong>{taskLength}</strong>
          items left
        </span>
        <ul className="filters">
          <li>
            <a href="#/" className="selected" onClick={() => showAll()}>
              All
            </a>
          </li>
          <li>
            <a href="#/" onClick={() => showActive()}>
              Active
            </a>
          </li>
          <li>
            <a href="#/" onClick={() => showCompleted()}>
              Completed
            </a>
          </li>
        </ul>

        <button className="clear-completed" onClick={() => ahmet()}>
          Clear completed
        </button>
      </footer>
    </div>
  );
}

export default Footer;
