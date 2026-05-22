import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

import type { Task } from "../types/Task";

interface Props {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

function Tasks({ tasks, setTasks }: Props) {

  const addTask = (title: string, priority: string) => {

    const newTask: Task = {
      id: Date.now(),
      title,
      priority,
      completed: false,
    };

    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleTask = (id: number) => {

    setTasks(
      tasks.map(task =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  return (
    <div className="container">

      <h1>Lista de Tareas</h1>

      <TaskForm addTask={addTask} />

      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
      />

    </div>
  );
}

export default Tasks;