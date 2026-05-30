import { useState } from "react";

import { Input, Button, Select } from "antd";

interface Props {
  addTask: (title: string, priority: string) => void;
}

function TaskForm({ addTask }: Props) {

  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Alta");

  const handleSubmit = (e: React.FormEvent) => {

    e.preventDefault();

    if (title.trim() === "") return;

    addTask(title, priority);

    setTitle("");
    setPriority("Alta");
  };

  return (

    <form className="task-form" onSubmit={handleSubmit}>

      <Input
        placeholder="Ingrese una tarea..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        size="large"
      />

      <Select
        value={priority}
        size="large"
        onChange={(value) => setPriority(value)}
        options={[
          { value: "Alta", label: "Alta" },
          { value: "Media", label: "Media" },
          { value: "Baja", label: "Baja" },
        ]}
      />

      <Button
        type="primary"
        htmlType="submit"
        size="large"
      >
        Agregar
      </Button>

    </form>

  );
}

export default TaskForm;
