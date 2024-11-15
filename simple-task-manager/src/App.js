import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState({ search: '', priority: '', status: '' });
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => setTasks([...tasks, task]);
  const updateTask = (id, updatedTask) => setTasks(tasks.map(task => task.id === id ? updatedTask : task));
  const deleteTask = (id) => setTasks(tasks.filter(task => task.id !== id));

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="App min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center py-10 text-gray-800 dark:text-gray-100 relative">
        {/* Dark Mode Toggle Slider */}
        <div className="absolute top-4 right-4 flex items-center">
          <label htmlFor="darkModeToggle" className="mr-2">Dark Mode</label>
          <input
            type="checkbox"
            id="darkModeToggle"
            className="hidden"
            checked={darkMode}
            onChange={toggleDarkMode}
          />
          <label
            htmlFor="darkModeToggle"
            className="cursor-pointer w-14 h-7 bg-gray-300 dark:bg-gray-600 rounded-full relative"
          >
            <span
              className={`${
                darkMode ? 'translate-x-7' : 'translate-x-0'
              } inline-block w-6 h-6 bg-white rounded-full transition-transform duration-300 transform`}
            ></span>
          </label>
        </div>

        <h1 className="text-3xl font-bold mb-5">Simple Task Manager</h1>
        <div className="w-full max-w-lg bg-white dark:bg-gray-800 p-5 rounded-lg shadow-lg">
          <TaskForm addTask={addTask} />
          <TaskList
            tasks={tasks}
            filter={filter}
            setFilter={setFilter}
            updateTask={updateTask}
            deleteTask={deleteTask}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
