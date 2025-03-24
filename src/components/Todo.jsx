import { useState, useEffect } from "react";
import ConfirmModal from "./ConfirmModal";
import ThemeToggle from "./ThemeToggle";
import TaskForm from "./TaskForm";

function Todo() {
  const [newTask, setNewTask] = useState("");

  const [task, setTask] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [darkMode, setDarkMode] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);

  const addTask = () => {
    if (!newTask) return;
    setTask([...task, { text: newTask, completed: false }]);
    setNewTask("");
  };

  // Delete function
  const removeTask = (index) => {
    if (taskToDelete === null) return;
    // const confirmDelete = window.confirm(
    //   "Are you sure you want to delete this task?"
    // );
    // if (!confirmDelete) return;

    const newTask = task.filter((_, i) => i !== taskToDelete);
    setShowModal(false);
    setTaskToDelete(null);
    setTask(newTask);
  };

  const completeTask = (index) => {
    const newTask = task.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );

    newTask.sort((a, b) => a.completed - b.completed);

    setTask(newTask);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(task));
  }, [task]);

  return (
    <>
      <div
        className={`h-screen mx-auto p-4 ${
          darkMode ? "bg-gray-900 text-white" : "bg-white text-[#333]"
        }`}
      >
        <div className="text-center">
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

          <h1 className="font-bold text-3xl p-6">My To-Do-List</h1>

          <TaskForm
            newTask={newTask}
            setNewTask={setNewTask}
            addTask={addTask}
            darkMode={darkMode}
          />
        </div>

        <ConfirmModal
          isOpen={showModal}
          onConfirm={removeTask}
          onCancel={() => {
            setShowModal(false);
            setTaskToDelete(null);
          }}
        />

        <div>
          {task.length === 0 && (
            <div className="text-center p-4">
              <h2 className="text-xl">No tasks yet!</h2>
            </div>
          )}
          <ol>
            {task.map((task, index) => (
              <li
                key={index}
                className={`p-4 border border-gray-300 rounded-md my-2 flex justify-between items-center shadow-md max-w-3xl mx-auto
                  ${
                    darkMode
                      ? "bg-gray-800 border-gray-700 text-white"
                      : "bg-white text-black border-gray-300"
                  }
                  `}
              >
                <span
                  className={`${
                    task.completed ? "line-through text-gray-500" : ""
                  } `}
                >
                  {task.text}
                </span>

                <div className="items-center space-x-2 flex">
                  <button
                    onClick={() => completeTask(index)}
                    className={`px-4 py-2 cursor-pointer rounded-md shadow-md text-white  justify-between transition duration-500 ease-in-out 
                ${
                  task.completed
                    ? "bg-gray-500 text-white hover:bg-gray-300"
                    : "bg-green-500 text-white hover:bg-green-300"
                }`}
                  >
                    {task.completed ? "Undo" : "Complete"}
                  </button>
                  <button
                    onClick={() => {
                      setShowModal(true);
                      setTaskToDelete(index);
                    }}
                    className="px-4 py-2 cursor-pointer rounded-md bg-red-500 shadow-md text-white  justify-between transition duration-500 ease-in-out hover:bg-red-300"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
}

export default Todo;
