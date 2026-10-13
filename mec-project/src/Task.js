import React from "react";

function Task({ task, deleteTask, completeTask }) {
  return (
    <div className={'task ${task.priority.toLowerCase()}'}>
      <div>
        <h3 className={task.completed ? "completed" : ""}>
          {task.name}
        </h3>
        <p>
          Priority: <b>{task.priority}</b>
        </p>
      </div>
      <div className="task-buttons">
        <button onClick={() => completeTask(task.id)}>
          {task.completed ? "Undo" : "Complete"}
        </button>
        <button onClick={() => deleteTask(task.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Task;