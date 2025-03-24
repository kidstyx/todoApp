function TaskItem({task, index, completeTask }) {
  return (
    <>
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
          className={`${task.completed ? "line-through text-gray-500" : ""} `}
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
    </>
  );
}

export default TaskItem;
