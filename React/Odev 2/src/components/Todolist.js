
function Todolist({ taskLength, completedAll, printTasks }) {



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
