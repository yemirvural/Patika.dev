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

  
  return (
    <div className="App">
      <Header addTask={setTasks} tasks={tasks} taskLength={taskLength} setTaskLength={setTaskLength} />
      <Todolist tasks={tasks} setTasks={setTasks} setTaskLength={setTaskLength} taskLength={taskLength} removeTask={removeTask} isCompleted={isCompleted} completedAll={completedAll}/>
      <Footer tasks={tasks} taskLength={taskLength} setTasks={setTasks} removeTask={removeTask} isCompleted={isCompleted} />
    </div>
  );
}

export default App;
