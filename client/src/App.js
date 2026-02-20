import React, { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route, Link } from "react-router-dom";
import GoalsPage from "./GoalsPage";
import { motion } from "framer-motion";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [showGoals, setShowGoals] = useState(false);

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
  <Routes>
    
    <Route
  path="/"
  element={
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.5 }}
      className="container"
    >
      <h1 className="title">SET YOUR GOALS</h1>

      <form onSubmit={addTask} className="form">
        <input
          type="text"
          placeholder="Enter your goal..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Add Goal</button>
      </form>

      <Link to="/goals">
        <button className="view-btn">
          VIEW GOALS ({tasks.length})
        </button>
      </Link>
    </motion.div>
  }
/>
  </Routes>
);

}
export default App;