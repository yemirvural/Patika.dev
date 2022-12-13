import { useState } from 'react'

function Header({ addTask, tasks }) {
  const [form, setForm] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if(form === ''){
      return false
    }
    addTask([...tasks,     {
      completed: false,
      text: `${form}`,
      id: tasks.length + 1,
    }]);
    setForm("")
  }

  return (
    <div>
      <header className="header">
          <h1>todos</h1>
          <form onSubmit={onSubmit}>
            <input className="new-todo" placeholder="What needs to be done?" value={form} onChange={(e) => setForm(e.target.value)} autoFocus />
          </form>
      </header>
    </div>
  )
}

export default Header