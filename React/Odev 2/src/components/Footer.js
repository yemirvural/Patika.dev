import React, { useState } from "react";

function Footer({ tasks, setTasks, taskLength, removeTask, isCompleted, showAll, showActive, showCompleted, isFiltered, setIsFiltered }) {
  
  const clearAll = () => {
    setTasks((item) => item.filter((el) => el.completed !== true))
  };

  return (
    // hidden classı çok kullanışsız olduğu için kaldırıldı.
    <div className={taskLength === 0 ? "hidden-off" : taskLength}>
      <footer className="footer">
        <span className="todo-count">
          <strong>{taskLength}</strong>
          items left
        </span>
        <ul className="filters">
          <li>
            <a href="#/" className={isFiltered.filterType === 0 ? "selected" : ""} onClick={() => setIsFiltered({filtered: false, filterType:0})}>
              All
            </a>
          </li>
          <li>
            <a href="#/" className={isFiltered.filterType === 1 ? "selected" : ""} onClick={() => setIsFiltered({filtered: true, filterType:1})}>
              Active
            </a>
          </li>
          <li>
            <a href="#/" className={isFiltered.filterType === 2 ? "selected" : ""} onClick={() => setIsFiltered({filtered: true, filterType:2})}>
              Completed
            </a>
          </li>
        </ul>

        <button className="clear-completed" onClick={() => clearAll()}>
          Clear completed
        </button>
      </footer>
    </div>
  );
}

export default Footer;
