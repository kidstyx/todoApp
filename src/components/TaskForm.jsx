function TaskForm({newTask, setNewTask, addTask, darkMode }) {
return (
    <>
        <div>
        <input
            type="text"
            className={`p-4 border border-gray-300 rounded-md w-3xl focus:outline-none focus:ring-2 
              focus:ring-blue-500 ${
                darkMode
                  ? "bg-gray-800 text-white border-gray-700"
                  : "bg-white text-black border-gray-300"
              }`}
            placeholder="Add a new task..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTask()} // Add task on Enter key press
          />
          <button
            className="px-8 py-4 cursor-pointer rounded-md bg-blue-500 shadow-md text-white mx-6 fixed transition duration-500 ease-in-out hover:bg-blue-300"
            onClick={addTask}
          >
            Add
          </button>
        </div>
    </>
)
}

export default TaskForm