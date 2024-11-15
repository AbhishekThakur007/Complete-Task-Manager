import React, { useState } from 'react';

function TaskList({ tasks, updateTask, deleteTask }) {
  const [search, setSearch] = useState('');
  const [priorityFilter, setPriorityFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  const handleSearch = (e) => setSearch(e.target.value);
  const handlePriorityFilter = (e) => setPriorityFilter(e.target.value);
  const handleStatusFilter = (e) => setStatusFilter(e.target.value);

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title.toLowerCase().includes(search.toLowerCase());
    const matchesPriority = priorityFilter ? task.priority === priorityFilter : true;
    const matchesStatus = statusFilter ? (statusFilter === 'Completed') === task.completed : true;
    return matchesSearch && matchesPriority && matchesStatus;
  });

  const today = new Date();
  const isOverdue = (dueDate) => new Date(dueDate) < today;

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Tasks</h2>

      {/* Search and Filter Inputs */}
      <div className="flex flex-wrap gap-3 mb-5">
        <input
          type="text"
          placeholder="Search tasks"
          value={search}
          onChange={handleSearch}
          className="p-2 border border-gray-300 rounded bg-white text-gray-700"
        />
        <select
          value={priorityFilter}
          onChange={handlePriorityFilter}
          className="p-2 border border-gray-300 rounded bg-white text-gray-700"
        >
          <option value="">Filter by Priority</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <select
          value={statusFilter}
          onChange={handleStatusFilter}
          className="p-2 border border-gray-300 rounded bg-white text-gray-700"
        >
          <option value="">Filter by Status</option>
          <option value="Completed">Completed</option>
          <option value="Pending">Pending</option>
        </select>
      </div>

      {filteredTasks.map((task) => (
        <div
          key={task.id}
          className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow-sm mb-4"
        >
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold">
              {task.title}
              {isOverdue(task.dueDate) && (
                <span className="ml-2 text-red-500" title="This task is overdue">⚠️</span>
              )}
            </h3>
            <button
              onClick={() => deleteTask(task.id)}
              className="bg-red-200 hover:bg-red-300 text-red-600 font-bold py-1 px-3 rounded-lg"
            >
              Delete
            </button>
          </div>
          <p>{task.description}</p>
          <p className="text-sm text-gray-500">Due Date: {new Date(task.dueDate).toLocaleDateString()}</p>
          <p className={`text-sm ${task.priority === 'High' ? 'text-red-500' : task.priority === 'Medium' ? 'text-yellow-500' : 'text-green-500'}`}>
            Priority: {task.priority}
          </p>
          <button
            onClick={() => updateTask(task.id, { ...task, completed: !task.completed })}
            className={`mt-2 ${task.completed ? 'bg-green-200' : 'bg-blue-200'} hover:${task.completed ? 'bg-green-300' : 'bg-blue-300'} text-${task.completed ? 'green' : 'blue'}-600 font-bold py-1 px-3 rounded-lg`}
          >
            {task.completed ? 'Mark as Incomplete' : 'Mark as Complete'}
          </button>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
