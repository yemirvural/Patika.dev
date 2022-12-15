import React, { useState } from "react";
import Todolist from "./Todolist";

function Footer({ tasks, taskLength, removeTask, isCompleted, setTasks }) {
  const showAll = () => {
    filteredList(tasks.map((el) => el));
  };
  const showActive = () => {
    filteredList(tasks.filter((el) => el.completed !== true));
  };
  const showCompleted = () => {
    filteredList(tasks.filter((el) => el.completed !== false));
  };

  const ahmet = () => {
    tasks.forEach((e) => e.filter((a) => a.completed !== false));
  };


  const filteredList = (arrayList) =>{
   return ( <ul>
   {arrayList.map((i) => 
   {
   
 
   
     <li key={i.id} className={i.completed ? "completed" : ""}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              checked={i.completed === true}
              onChange={() => isCompleted(i)}
            />
            <label>{i.text}</label>
            <button className="destroy" onClick={() => removeTask(i)}></button>
          </div>
        </li>
          }
         )}
          </ul>)}

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