import './index.css';
import Header from './components/Header';
import Todolist from './components/Todolist';
import Footer from './components/Footer';
import { useState, useEffect } from "react";


function App() {
  const [tasks, setTasks] = useState(["Learn JavaScript", "Learn React", "Have a life!"])
  
  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  return (
    <div className="App">
      <Header addTask={setTasks} tasks={tasks}/>
      <Todolist tasks={tasks}/>
      <Footer/>
    </div>
  );
}

export default App;
