import { all } from "axios";
import { useEffect, useState } from "react";
import { act } from "react-dom/test-utils";

function Todolist({ tasks, setTasks, setTaskLength, taskLength, removeTask, isCompleted, completedAll, isFiltered, printTasks, filteredListt, printScreen }) {
  const [request, setRequest] = useState(true);

  useEffect(() => {
    if (request === false) {
    }
  }, [request]);


return (
    <div>
      <section className={taskLength === 0 ? 'hidden main' : "main"}>
        <input className="toggle-all" id="toggle-all" type="checkbox" onChange={() => completedAll()} />
        <label htmlFor="toggle-all">Mark all as complete</label>

        <ul className="todo-list">
          {printTasks()}
        </ul>
      </section>
    </div>
  );
}
export default Todolist 
