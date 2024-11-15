import React from 'react';

export default function SearchFilter({ setFilter }) {
  const handlePriorityChange = (e) => {
    setFilter({ priority: e.target.value });
  };

  return (
    <div className="mt-6">
      <select onChange={handlePriorityChange} className="w-full p-2 bg-gray-700 text-white rounded">
        <option value="all">All Priorities</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
    </div>
  );
}
