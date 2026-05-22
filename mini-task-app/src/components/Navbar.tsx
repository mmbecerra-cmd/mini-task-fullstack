import { Link } from "react-router-dom";

function Navbar() {
  return (

    <nav>

      <div className="logo">
        Sistema de Gestión de Tareas
      </div>

      <ul>

        <li>
          <Link to="/">Inicio</Link>
        </li>

        <li>
          <Link to="/tasks">Tareas</Link>
        </li>

        <li>
          <Link to="/stats">Estadísticas</Link>
        </li>

      </ul>

    </nav>

  );
}

export default Navbar;