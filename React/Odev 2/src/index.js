import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <section className="todoapp">
      <App />
    </section>

    <footer className="info">
      <p>Click to edit a todo</p>
      <p>
        Created by <a href="https://d12n.me/">Dmitry Sharabin</a>
      </p>
      <p>
        Part of <a href="http://todomvc.com">TodoMVC</a>
      </p>
    </footer>
  </React.StrictMode>
);


