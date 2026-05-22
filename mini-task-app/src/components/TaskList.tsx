import TaskItem from "./TaskItem";

import type { Task } from "../types/Task";

interface Props {
  tasks: Task[];
  deleteTask: (id: number) => void;
  toggleTask: (id: number) => void;
}

function TaskList({ tasks, deleteTask, toggleTask }: Props) {

  return (
    <div>

      {tasks.length === 0 ? (
        <p>No hay tareas</p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleTask={toggleTask}
          />
        ))
      )}

    </div>
  );
}

export default TaskList;