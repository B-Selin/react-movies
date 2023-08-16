import "./NavBar.css";
import { NavLink } from "react-router-dom";

export default function NavBar({ user }) {
  return (
    <div className="flex-container">
      <NavLink className="flex-item" to="/">
        <button className="btn fourth">Movies</button>
      </NavLink>
      <NavLink className="flex-item" to="/actors">
        <button className="btn fourth">Actors</button>
      </NavLink>
      <p className="flex-item">Welcome, {user}!</p>
    </div>
  );
}