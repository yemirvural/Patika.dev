import { useEffect, useState } from "react";
import List from "./List";

function Todolist({ tasks }) {
  return (
    <div>
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>

        <ul className="todo-list">
          <li className="">
          <div className="view">
                <input className="toggle" type="checkbox" />
                    <List tasks={tasks}></List>
                <button className="destroy"></button>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Todolist;
