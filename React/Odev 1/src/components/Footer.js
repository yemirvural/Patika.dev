import React, { useState } from "react";

function Footer({ taskLength }) {
  return (
    <div>
      <footer className="footer">
        <span className="todo-count">
          <strong>{taskLength}</strong>
          items left
        </span>

        <ul className="filters">
          <li>
            <a href="#/" className="selected">
              All
            </a>
          </li>
          <li>
            <a href="#/">Active</a>
          </li>
          <li>
            <a href="#/">Completed</a>
          </li>
        </ul>

        <button className="clear-completed">Clear completed</button>
      </footer>
    </div>
  );
}

export default Footer;
