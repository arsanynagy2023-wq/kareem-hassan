
import { Link } from "react-router-dom";
import "../styles/home.css";

export default function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <span className="tag">
          # Best Mathematics Teacher
        </span>

        <h1>
          Kareem Hassan
        </h1>

        <p>
          Join the best mathematics courses for preparatory students and
          improve your level with modern teaching methods and continuous follow-up.
        </p>

        <div className="hero-buttons">

          <Link to="/register">
            <button className="start-btn">
              Register Now
            </button>
          </Link>

          <Link to="/courses">
            <button className="courses-btn">
              Courses
            </button>
          </Link>

        </div>

      </div>

      <div className="hero-right">

        <div className="glass-card">
          <h2>+500</h2>
          <p>Students</p>
        </div>

        <div className="glass-card">
          <h2>100%</h2>
          <p>Success Rate</p>
        </div>

      </div>

      <a
        href="tel:201554909339"
        className="call-bubble"
      >
        Call Us
      </a>

    </section>
  );
}

