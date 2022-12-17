import "./index.css";
import Header from "./components/Header";
import Todolist from "./components/Todolist";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      completed: false,
      text: "Learn JavaScript",
      id: 1,
    },
    {
      completed: false,
      text: "Learn React",
      id: 2,
    },
    {
      completed: false,
      text: "Have a life!",
      id: 3,
    }
  ]);

  const [taskLength, setTaskLength] = useState(tasks.length);
  // const [filteredList, setFilteredList] = useState(tasks);
  const [isFiltered, setIsFiltered] = useState({filtered: false, filterType: 0});

   useEffect(() => {
     console.log(tasks);
   }, [tasks]);

  const removeTask = (gorev) => {
    // let index = tasks.findIndex((item) => item.text === gorev.text);
    // tasks.splice(index, 1);
    let index = gorev.id;
    setTasks((item) => item.filter((son) => son.id !== index));
    setTaskLength(tasks.length - 1);
  };  
  const isCompleted = (task) => {
    setTasks(tasks.map((item) => item.id === task.id ? {...item, completed: !item.completed} : item))
  }
  const completedAll = () => {
    // Burada ki buglar düzeltilecek...
    tasks.forEach((e) => e.completed === false ? setTasks(tasks.map((item) => ({...item, completed: true}))) : setTasks(tasks.map((item) => ({...item, completed: false})))) 
  }

  // Alternative:
  // const showAll = () => {
  //   setIsFiltered({filtered: false, filterType:0})
  // };
  // const showActive = () => {
  //   setIsFiltered({filtered: true, filterType:1})
  // };
  // const showCompleted = () => {
  //   setIsFiltered({filtered: true, filterType:2})
  // };

  const onInputChange = (e) => {
    // eslint-disable-next-line eqeqeq
    setTasks((task) => task.map((el) => el.id == e.target.id ? {...el, text: e.target.value} : el));
  }

  const printTasks = () => isFiltered.filtered ? filteredList() : printScreen(tasks.filter(i => i));
  const filteredList = () => printScreen(tasks.filter(i => i.completed !== (isFiltered.filterType === 1 ? true : false)));

  const printScreen = (array) => { 
    setTaskLength(array.length);
    return (array.map((el) =>
   <li key={el.id} className={el.completed ? "completed" : ""}>  
      <div className="view">
        <input className="toggle" type="checkbox" checked={el.completed === true } onChange={() => isCompleted(el)}/>
        <label>
          <input
                name={"text"}
                id={el.id}
                type="text"
                value={el.text}
                className={"todo-task"}
                onChange={onInputChange}
            />
        </label>
        <button
          className="destroy"
          onClick={() => removeTask(el)}
        ></button>
      </div>
    </li>
  ))}

  return (
    <div className="App">
      <Header addTask={setTasks} tasks={tasks} setTaskLength={setTaskLength} />
      <Todolist printTasks={printTasks} completedAll={completedAll} taskLength={taskLength} />
      <Footer taskLength={taskLength} setTasks={setTasks}isFiltered={isFiltered} setIsFiltered={setIsFiltered} />
    </div>
  );
}

export default App;
