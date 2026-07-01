import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/register.css";

export default function Register() {

  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [grade, setGrade] = useState("");
  const [gender, setGender] = useState("");
  const [time, setTime] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const arabicRegex = /^[\u0600-\u06FF\s]+$/;

  const handleRegister = async () => {

    setError("");

    if (
      !firstName ||
      !lastName ||
      !phone ||
      !grade ||
      !gender ||
      !time
    ) {
      setError("Please fill all fields");
      return;
    }

    if (!arabicRegex.test(firstName)) {
      setError("First name must be in Arabic");
      return;
    }

    if (!arabicRegex.test(lastName)) {
      setError("Second name must be in Arabic");
      return;
    }

    if (!/^\d{11}$/.test(phone)) {
      setError("Phone number must be 11 digits");
      return;
    }

    try {

      setLoading(true);

      const response = await fetch(
        "http://localhost:5000/api/students/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            firstName,
            lastName,
            phone,
            grade,
            gender,
            time
          })
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Registration failed");
        setLoading(false);
        return;
      }

      localStorage.setItem(
        "student",
        JSON.stringify(data.student)
      );

      alert("Registration completed successfully 🔥");

      navigate("/dashboard");

    } catch (err) {

      console.log(err);

      setError(
        "Cannot connect to backend server"
      );

    } finally {

      setLoading(false);

    }
  };

  return (
    <section className="register">

      <div className="register-box">

        <h1>Student Registration</h1>

        <p>
          Reserve your place now with Mr. Kareem Hassan
        </p>

        {
          error &&
          <div className="error-box">
            {error}
          </div>
        }

        <div className="input-box no-arrow">
          <input
            type="text"
            value={firstName}
            onChange={(e) =>
              setFirstName(e.target.value)
            }
          />
          <label>First Name</label>
        </div>

        <div className="input-box no-arrow">
          <input
            type="text"
            value={lastName}
            onChange={(e) =>
              setLastName(e.target.value)
            }
          />
          <label>Second Name</label>
        </div>

        <div className="input-box no-arrow">
          <input
            type="text"
            maxLength={11}
            value={phone}
            onChange={(e) => {
              const value =
                e.target.value.replace(/\D/g, "");
              setPhone(value);
            }}
          />
          <label>Phone Number</label>
        </div>

        <div className="input-box">
          <select
            value={grade}
            onChange={(e) => {
              setGrade(e.target.value);
              setTime("");
            }}
          >
            <option value=""></option>
            <option>First Prep</option>
            <option>Second Prep</option>
            <option>Third Prep</option>
          </select>

          <label>Grade</label>
        </div>

        <div className="input-box">
          <select
            value={gender}
            onChange={(e) =>
              setGender(e.target.value)
            }
          >
            <option value=""></option>
            <option>Male</option>
            <option>Female</option>
          </select>

          <label>Gender</label>
        </div>

        <div className="input-box">
          <select
            value={time}
            onChange={(e) =>
              setTime(e.target.value)
            }
          >
            <option value=""></option>

            {
              grade === "First Prep" &&
              <>
                <option>2 PM</option>
                <option>4 PM</option>
                <option>6 PM</option>
                <option>8 PM</option>
              </>
            }

            {
              grade === "Second Prep" &&
              <>
                <option>2 PM</option>
                <option>4 PM</option>
                <option>6 PM</option>
              </>
            }

            {
              grade === "Third Prep" &&
              <>
                <option>12 PM</option>
                <option>2 PM</option>
                <option>4 PM</option>
                <option>6 PM</option>
              </>
            }

          </select>

          <label>Time</label>
        </div>

        <button
          onClick={handleRegister}
          disabled={loading}
        >
          {
            loading
              ? "Registering..."
              : "Register Now"
          }
        </button>

      </div>

    </section>
  );
}