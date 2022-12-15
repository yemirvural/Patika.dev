import { all } from "axios";
import { useEffect, useState } from "react";
import { act } from "react-dom/test-utils";

function Todolist({ tasks, setTasks, setTaskLength, taskLength, removeTask, isCompleted, completedAll }) {
  const [request, setRequest] = useState(true);

  useEffect(() => {
    if (request === false) {
    }
  }, [request]);

  //// All tasks in below
  const allTasks = tasks.map((task) => (
    <li key={task.id} className={task.completed ? "completed" : ""}>  
      <div className="view">
        <input className="toggle" type="checkbox" checked={task.completed === true } onChange={() => isCompleted(task)}/>
        <label>{task.text}</label>
        <button
          className="destroy"
          onClick={() => removeTask(task)}
        ></button>
      </div>
    </li>
  ))
  const activeTasks = allTasks.filter((el) => el.completed != true)
  let printTasks = (array) => array.filter((i) => i);

return (
    <div>
      <section className={taskLength === 0 ? 'hidden main' : "main"}>
        <input className="toggle-all" id="toggle-all" type="checkbox" onChange={() => completedAll()} />
        <label htmlFor="toggle-all">Mark all as complete</label>

        <ul className="todo-list">
          {printTasks(allTasks)}
        </ul>
      </section>
    </div>
  );
}
export default Todolist 
