import type { Task } from "../types/Task";

interface Props {
  task: Task;
  deleteTask: (id: number) => void;
  toggleTask: (id: number) => void;
}

function TaskItem({
  task,
  deleteTask,
  toggleTask
}: Props) {

  return (

    <div className="task-card">

      <div className="task-left">

        <div
          className={
            task.completed
              ? "status completed-status"
              : "status pending-status"
          }
        >
        </div>

        <div>

          <h3
            className={
              task.completed
                ? "completed"
                : ""
            }
          >
            {task.title}
          </h3>

          <p>
            Prioridad:
            <span className="priority">
              {task.priority}
            </span>
          </p>

        </div>

      </div>

      <div className="task-buttons">

        <button
          onClick={() => toggleTask(task.id)}
        >
          {
            task.completed
              ? "Desmarcar"
              : "Completar"
          }
        </button>

        <button
          onClick={() => deleteTask(task.id)}
        >
          Eliminar
        </button>

      </div>

    </div>

  );
}

export default TaskItem;