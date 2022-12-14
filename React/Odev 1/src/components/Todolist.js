import { useEffect, useState } from "react";

function Todolist({ tasks, setTasks }) {
  const [request, setRequest] = useState(true);

  useEffect(() => {
    if (request === false) {
    }
  }, [request]);

  const removeTask = (gorev) => {
    // let index = tasks.findIndex((item) => item.text === gorev.text);
    // tasks.splice(index, 1);
    let index = gorev.id;
    setTasks((item) => item.filter((son) => son.id !== index))
  };  
  const isCompleted = (task) => {
    setTasks(tasks.map((item) => item.id === task.id ? {...item, completed: !item.completed} : item))
  }

  const completedAll = () => {
    // Burada ki buglar düzeltilecek...
    setTasks(tasks.map((item) => ({...item, completed: true})));
  }
  
  return (
    <div>
      <section className="main">
        <input className="toggle-all" id="toggle-all" type="checkbox" onChange={() => completedAll()} />
        <label htmlFor="toggle-all">Mark all as complete</label>

        <ul className="todo-list">
          {tasks.map((task) => (
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
            ))}
        </ul>
      </section>
    </div>
  );
}

export default Todolist;
