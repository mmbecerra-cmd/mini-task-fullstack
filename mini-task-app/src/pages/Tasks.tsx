import { useEffect } from "react";

import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

import type { Task } from "../types/Task";

import {
  getTasks,
  createTask,
  deleteTaskApi,
  updateTaskApi,
} from "../services/taskService";

interface Props {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

function Tasks({ tasks, setTasks }: Props) {

  useEffect(() => {

    const loadTasks = async () => {

      const data = await getTasks();

      setTasks(data);

    };

    loadTasks();

  }, [setTasks]);

  const addTask = async (
    title: string,
    priority: string
  ) => {

    const newTask = await createTask(
      title,
      priority
    );

    setTasks([...tasks, newTask]);

  };

  const deleteTask = async (
    id: number
  ) => {

    await deleteTaskApi(id);

    setTasks(
      tasks.filter(
        task => task.id !== id
      )
    );

  };

  const toggleTask = async (
    id: number
  ) => {

    const task = tasks.find(
      t => t.id === id
    );

    if (!task) return;

    const updatedTask =
      await updateTaskApi(
        id,
        !task.completed
      );

    setTasks(
      tasks.map(task =>
        task.id === id
          ? updatedTask
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