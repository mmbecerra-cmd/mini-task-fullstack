import { useState } from "react";

interface Props {
  addTask: (title: string, priority: string) => void;
}

function TaskForm({ addTask }: Props) {

  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Alta");

  const handleSubmit = (e: React.FormEvent) => {

    e.preventDefault();

    if(title.trim() === "") return;

    addTask(title, priority);

    setTitle("");
    setPriority("Alta");
  };

  return (

    <form className="task-form" onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Ingrese una tarea..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option>Alta</option>
        <option>Medio</option>
        <option>Baja</option>
      </select>

      <button type="submit">
        Agregar
      </button>

    </form>

  );
}

export default TaskForm;