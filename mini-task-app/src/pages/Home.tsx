import { Link } from "react-router-dom";

function Home() {

  return (

    <div className="container home">

      <div className="hero-card">

        <h1>
          Sistema de Gestión de Tareas
        </h1>

        <p>
          Organiza tus actividades de manera rápida,
          moderna y eficiente.
        </p>

        <div className="home-buttons">

          <Link to="/tasks">
            <button>
              Ir a Tareas
            </button>
          </Link>

          <Link to="/stats">
            <button>
              Ver Estadísticas
            </button>
          </Link>

        </div>

      </div>

    </div>

  );
}

export default Home;