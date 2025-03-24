import TaskItem from "./TaskItem";

function TaskList({tasks, completeTask, deleteTask, darkMode}) {
  return (
    <>
      <div>
        {tasks.length === 0 && (
          <div className="text-center p-4">
            <h2 className="text-xl">No tasks yet!</h2>
          </div>
        )}
        <ol>
          {tasks.map((task, index) => (
            <TaskItem
                key={index}
                completeTask={completeTask}
                deleteTask={deleteTask}
                task={task}
                darkMode={darkMode}
            />
          ))}
        </ol>
      </div>
    </>
  );
}

export default TaskList;
