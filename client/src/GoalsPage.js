import React from "react";

function GoalsPage({ tasks, toggleComplete, deleteTask }) {
  return (
    <div className="goals-page">
      <h1 className="title">YOUR GOALS</h1>

      <div className="goal-list-page">
        {tasks.map((task) => (
          <div key={task._id} className="goal-item-page">
            <span
              onClick={() => toggleComplete(task)}
              className={task.completed ? "completed" : ""}
            >
              {task.title}
            </span>

            <button onClick={() => deleteTask(task._id)}>❌</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GoalsPage;