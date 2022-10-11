import { useTasks } from "../context/TaskContext";
import { useNavigate } from "react-router-dom";

function TaskCard({ task }) {
  const { deleteTask, toggleTaskStatus } = useTasks();
  const navigate = useNavigate();

  const handleDone = async () => {
    await toggleTaskStatus(task.id);
  };

  return (
    <div className="bg-slate-300 rounded-md p-4">
      <header className="flex justify-between">
        <h2 className="text-sm font-bold">{task.title}</h2>
        <span>{task.status ? "✅" : "❌"}</span>
      </header>
      <p className="text-xs">{task.description}</p>
      <span>{task.created_at}</span>

      <div className="flex gap-x-3">
        <button
          className="bg-red-600 px-2 py-1 rounded-sm text-white"
          onClick={() => deleteTask(task.id)}
        >
          Delete
        </button>
        <button
          className="bg-blue-600 px-2 py-1 rounded-sm text-white"
          onClick={() => navigate(`/edit/${task.id}`)}
        >
          Edit
        </button>
        <button
          className="bg-green-600 px-2 py-1 rounded-sm text-white"
          onClick={() => handleDone(task.status)}
        >
          Toggle task
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
