import type { Task } from "../types/Task";

interface Props {
  tasks: Task[];
}

function Stats({ tasks }: Props) {

  const completedTasks =
    tasks.filter(task => task.completed).length;

  const pendingTasks =
    tasks.filter(task => !task.completed).length;

  return (

    <div className="container">

      <div className="stats-header">

        <h1>
          Panel de Estadísticas
        </h1>

        <p>
          Resumen general del progreso de tareas
        </p>

      </div>

      <div className="stats-grid">

        <div className="stats-card">

          <h2>Total de tareas</h2>

          <p>{tasks.length}</p>

        </div>

        <div className="stats-card">

          <h2>Completadas</h2>

          <p>{completedTasks}</p>

        </div>

        <div className="stats-card">

          <h2>Pendientes</h2>

          <p>{pendingTasks}</p>

        </div>

      </div>

    </div>

  );
}

export default Stats;