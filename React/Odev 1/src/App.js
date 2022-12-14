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

  return (
    <div className="App">
      <Header addTask={setTasks} tasks={tasks} taskLength={taskLength} setTaskLength={setTaskLength} />
      <Todolist tasks={tasks} setTasks={setTasks} setTaskLength={setTaskLength} taskLength={taskLength}/>
      <Footer tasks={tasks} taskLength={taskLength}/>
    </div>
  );
}

export default App;
