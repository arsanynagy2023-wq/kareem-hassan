import { Link } from "react-router-dom";
import "../styles/adminDashboard.css";

export default function AdminDashboard() {

  const students =
    JSON.parse(localStorage.getItem("students")) || [];

  const firstPrep =
    students.filter(
      (student)=>student.grade==="First Prep"
    );

  const secondPrep =
    students.filter(
      (student)=>student.grade==="Second Prep"
    );

  const thirdPrep =
    students.filter(
      (student)=>student.grade==="Third Prep"
    );

  return (

    <section className="admin-dashboard">

      <h1>
        Mr. Kareem Dashboard
      </h1>

      <div className="grades-container">

        <div className="grade-card">

          <h2>
            First Prep
          </h2>

          <p>
            Students :
            {" "}
            {firstPrep.length}
          </p>

          <Link
            className="open-btn"
            to="/admin/first"
          >
            Open →
          </Link>

        </div>


        <div className="grade-card">

          <h2>
            Second Prep
          </h2>

          <p>
            Students :
            {" "}
            {secondPrep.length}
          </p>

          <Link
            className="open-btn"
            to="/admin/second"
          >
            Open →
          </Link>

        </div>


        <div className="grade-card">

          <h2>
            Third Prep
          </h2>

          <p>
            Students :
            {" "}
            {thirdPrep.length}
          </p>

          <Link
            className="open-btn"
            to="/admin/third"
          >
            Open →
          </Link>

        </div>

      </div>

    </section>

  );

}