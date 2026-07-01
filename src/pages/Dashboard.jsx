import "../styles/dashboard.css";

export default function Dashboard() {

  const student =
    JSON.parse(localStorage.getItem("student"));

  if (!student) {

    return (

      <section className="student-dashboard">

        <div className="student-card">

          <h1>
            No Registration Found
          </h1>

          <p>
            Please register first.
          </p>

        </div>

      </section>

    );

  }

  return (

    <section className="student-dashboard">

      <div className="student-card">

        <div className="top-status">

          <div className="status-circle">
            ✓
          </div>

          <h1>
            Welcome, {student.firstName}
          </h1>

          <p>
            Your Reservation Status
          </p>

        </div>

        <div className="student-info">

          <div className="info-box">

            <span>
              First Name
            </span>

            <h2>
              {student.firstName}
            </h2>

          </div>

          <div className="info-box">

            <span>
              Second Name
            </span>

            <h2>
              {student.lastName}
            </h2>

          </div>

          <div className="info-box">

            <span>
              Phone Number
            </span>

            <h2>
              {student.phone}
            </h2>

          </div>

          <div className="info-box">

            <span>
              Gender
            </span>

            <h2>
              {student.gender}
            </h2>

          </div>

          <div className="info-box">

            <span>
              Grade
            </span>

            <h2>
              {student.grade}
            </h2>

          </div>

          <div className="info-box">

            <span>
              Time
            </span>

            <h2>
              {student.time}
            </h2>

          </div>

          <div className="info-box">

            <span>
              Registration
            </span>

            <h2 className="open-text">
              Confirmed
            </h2>

          </div>

        </div>

      </div>

    </section>

  );

}