import React, { useState } from 'react';

function TaskForm({ addTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('Low');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && dueDate) {
      addTask({ id: Date.now(), title, description, dueDate, priority, completed: false });
      setTitle('');
      setDescription('');
      setDueDate('');
      setPriority('Low');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="p-2 border border-gray-300 rounded bg-gray-50 text-gray-700"
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="p-2 border border-gray-300 rounded bg-gray-50 text-gray-700"
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="p-2 border border-gray-300 rounded bg-gray-50 text-gray-700"
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="p-2 border border-gray-300 rounded bg-gray-50 text-gray-700"
      >
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button
        type="submit"
        className="bg-indigo-200 hover:bg-indigo-300 text-indigo-600 font-bold py-2 px-4 rounded"
      >
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;
