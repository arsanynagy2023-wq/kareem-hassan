import { Link } from "react-router-dom";
import "../styles/header.css";

export default function Header() {
  return (
    <nav className="navbar">

      <div className="logo">
        <span>√x</span>

        <div className="logo-text">
          <h2>Mr. Kareem</h2>
          <p>Math Teacher</p>
        </div>
      </div>

      <ul className="nav-links">

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/courses">Courses</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>

        <li>
          <Link to="/register">Register</Link>
        </li>

      </ul>

      <div className="language-switch">

        <button className="active-lang">
          AR
        </button>

        <button>
          EN
        </button>

      </div>

    </nav>
  );
}