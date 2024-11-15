import React from 'react';

function TaskItem({ task, updateTask, deleteTask }) {
  const toggleCompletion = () => updateTask(task.id, { ...task, completed: !task.completed });

  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md mb-3 flex flex-col gap-2">
      <h3 className="text-xl font-semibold">{task.title}</h3>
      <p>{task.description}</p>
      <p>Due Date: {task.dueDate}</p>
      <p>Priority: <span className={`text-${task.priority === 'High' ? 'red' : task.priority === 'Medium' ? 'yellow' : 'green'}-500 font-bold`}>{task.priority}</span></p>
      <p>Status: {task.completed ? 'Completed' : 'Pending'}</p>
      <div className="flex gap-2">
        <button onClick={toggleCompletion} className="bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-blue-600">
          {task.completed ? 'Mark as Pending' : 'Mark as Completed'}
        </button>
        <button onClick={() => deleteTask(task.id)} className="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600">
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
