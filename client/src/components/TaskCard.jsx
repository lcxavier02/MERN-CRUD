import { useTasks } from "../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask } = useTasks();

  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <span>{task.status ? "✔️" : "❌"}</span>
      <span>{task.created_at}</span>

      <button onClick={() => deleteTask(task.id)}>Delete</button>
      <button>Edit</button>
    </div>
  );
}

export default TaskCard;
