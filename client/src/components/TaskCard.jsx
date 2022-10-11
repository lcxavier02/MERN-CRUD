import { useTasks } from "../context/TaskContext";
import { useNavigate } from "react-router-dom";

function TaskCard({ task }) {
  const { deleteTask, toggleTaskStatus } = useTasks();
  const navigate = useNavigate();

  const handleDone = async () => {
    await toggleTaskStatus(task.id);
  };

  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <span>{task.status ? "✔️" : "❌"}</span>
      <span>{task.created_at}</span>

      <button onClick={() => deleteTask(task.id)}>Delete</button>
      <button onClick={() => navigate(`/edit/${task.id}`)}>Edit</button>
      <button onClick={() => handleDone(task.status)}>Toggle task</button>
    </div>
  );
}

export default TaskCard;
