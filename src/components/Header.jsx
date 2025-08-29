import { NavLink } from "react-router-dom";
import logo from "../img/logo.png";

export default function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="brand">Tu Tienda</h1>
      </div>
      <nav className="nav">
        <NavLink to="/" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
          Inicio
        </NavLink>
        <NavLink to="/productos" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
          Productos
        </NavLink>
        <NavLink to="/ubicanos" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
          Ubícanos
        </NavLink>
      </nav>
    </header>
  );
}