import React, { useState } from "react";

function Footer({ tasks, taskLength, removeTask, isCompleted, showAll, showActive, showCompleted, isFiltered }) {
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
            <a href="#/" className={isFiltered.filterType === 0 ? "selected" : ""} onClick={showAll}>
              All
            </a>
          </li>
          <li>
            <a href="#/" className={isFiltered.filterType === 1 ? "selected" : ""} onClick={showActive}>
              Active
            </a>
          </li>
          <li>
            <a href="#/" className={isFiltered.filterType === 2 ? "selected" : ""} onClick={showCompleted}>
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
