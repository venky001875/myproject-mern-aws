import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const API = "http://localhost:5000/api/tasks";

  // Fetch tasks
  const fetchTasks = async () => {
    const res = await axios.get(API);
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Add task
  const addTask = async (e) => {
    e.preventDefault();
    if (!title) return;

    await axios.post(API, { title });
    setTitle("");
    fetchTasks();
  };

  // Delete task
  const deleteTask = async (id) => {
    await axios.delete(`${API}/${id}`);
    fetchTasks();
  };

  // Toggle complete
  const toggleComplete = async (task) => {
    await axios.put(`${API}/${task._id}`, {
      ...task,
      completed: !task.completed,
    });
    fetchTasks();
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h2>Task Manager 🚀</h2>

      <form onSubmit={addTask}>
        <input
          type="text"
          placeholder="Enter task..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {tasks.map((task) => (
          <li key={task._id} style={{ marginTop: "10px" }}>
            <span
              onClick={() => toggleComplete(task)}
              style={{
                cursor: "pointer",
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.title}
            </span>

            <button
              onClick={() => deleteTask(task._id)}
              style={{ marginLeft: "10px" }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;