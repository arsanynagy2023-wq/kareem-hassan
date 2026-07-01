import { Link } from "react-router-dom";
import "../styles/header.css";

export default function Header() {

  const students =
    JSON.parse(sessionStorage.getItem("students")) || [];

  const hasStudents = students.length > 0;

  return (

    <nav className="navbar">

      <Link
        to="/admin-login"
        className="logo"
      >
        Kareem Hassan
      </Link>

      <ul className="nav-links">

        <li>
          <Link to="/">
            Home
          </Link>
        </li>

        <li>
          <Link to="/about">
            About
          </Link>
        </li>

        <li>
          <Link to="/courses">
            Courses
          </Link>
        </li>

        <li>
          <Link to="/grades">
            Grades
          </Link>
        </li>

        {hasStudents && (

          <li className="status-link">

            <Link to="/dashboard">
              Status
            </Link>

          </li>

        )}

        <li>
          <Link to="/register">
            Register
          </Link>
        </li>

      </ul>

    </nav>

  );

}