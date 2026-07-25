import { NavLink } from "react-router-dom";
import "../../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">SAM</h2>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/map">Map</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
