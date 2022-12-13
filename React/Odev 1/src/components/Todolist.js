import { useEffect, useState } from "react";

function Todolist({ tasks, setTasks }) {
  const [request, setRequest] = useState(true);

  useEffect(() => {
    if (request === false) {
    }
  }, [request]);

  const removeTask = (gorev) => {
    let index = gorev.id;
    // let index = tasks.findIndex((item) => item.text === gorev.text);
    // tasks.splice(index, 1);
    setTasks((item) => item.filter((son) => son.id !== index))
  };  

  

  return (
    <div>
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>

        <ul className="todo-list">
          {tasks.map((task) => (
              <li key={task.id}>
                <div className="view">
                  <input className="toggle" type="checkbox" />
                  <label>{task.text}</label>
                  <button
                    className="destroy"
                    onClick={() => removeTask(task)}
                  ></button>
                </div>
              </li>
            ))}
        </ul>
      </section>
    </div>
  );
}

export default Todolist;
