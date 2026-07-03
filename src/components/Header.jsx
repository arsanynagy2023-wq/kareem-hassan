import { Link } from "react-router-dom";
import "../styles/header.css";

export default function Header() {
  return (
    <header className="header-wrapper">

      <nav className="navbar">

        <div className="logo-box">
          <div className="math-logo">√x</div>

          <div>
            <h2>Mr. Kareem</h2>
            <span>Math Teacher</span>
          </div>
        </div>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/register">Register</Link></li>
        </ul>

        <div className="lang-buttons">
          <button>AR</button>
          <button>EN</button>
        </div>

      </nav>

    </header>
  );
}