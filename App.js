import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // FETCH TASKS
  useEffect(() => {
    fetch("http://localhost:8080/tasks")
      .then(res => res.json())
      .then(data => setTasks(data));
  }, []);

  // ADD TASK
  const addTask = async () => {
    if (!title.trim()) return;

    const newTask = { title, description, completed: false };

    const res = await fetch("http://localhost:8080/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTask),
    });

    const savedTask = await res.json();
    setTasks([...tasks, savedTask]);
    setTitle("");
    setDescription("");
  };

  // TOGGLE COMPLETED
  const toggleTask = async (task) => {
    const updatedTask = { ...task, completed: !task.completed };

    await fetch(`http://localhost:8080/tasks/${task.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedTask),
    });

    setTasks(tasks.map(t => t.id === task.id ? updatedTask : t));
  };

  // DELETE TASK
  const deleteTask = async (id) => {
    await fetch(`http://localhost:8080/tasks/${id}`, {
      method: "DELETE",
    });

    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="page">
      <div className="card">
        <h1>📝 TaskFlow</h1>
        <p className="subtitle">Organize your work simply</p>

        <div className="inputs">
          <input
            placeholder="Task title"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <input
            placeholder="Description"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <button onClick={addTask}>Add Task</button>
        </div>

        <ul className="task-list">
          {tasks.map(task => (
            <li key={task.id} className="task">
              <span
                className={`status ${task.completed ? "done" : ""}`}
                onClick={() => toggleTask(task)}
              >
                {task.completed ? "✅" : "⭕"}
              </span>

              <div className="text">
                <strong>{task.title}</strong>
                <div className="desc">{task.description}</div>
              </div>

              <button
                className="delete"
                onClick={() => deleteTask(task.id)}
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
