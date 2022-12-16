import { useState, useRef } from 'react'

function Header({ addTask, tasks, setTaskLength}) {
  const [form, setForm] = useState("");

  const ref = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
    if(form === ''){
      return false
    }
    /// id number so important ! 
    addTask([...tasks,     {
      completed: false,
      text: `${form}`,
      id: tasks.length === 0 ? 1 : (tasks[(tasks.length - 1)].id + 1),
    }]);
    setForm("")
    setTaskLength(tasks.length + 1);
  }
  
  return (
    <div>
      <header className="header">
          <h1>todos</h1>
          <form onSubmit={onSubmit}>
            <input className="new-todo" placeholder="What needs to be done?" value={form} onChange={(e) => setForm(e.target.value)} autoFocus ref={ref} />
          </form>
      </header>
    </div>
  )
}

export default Header