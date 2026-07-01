import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/admin.css";

export default function AdminLogin() {

  const navigate = useNavigate();

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const [error,setError] = useState("");

  const handleLogin = () => {

    if(

      name === "Kareem Hassan" &&
      email === "kareem@gmail.com" &&
      password === "123456"

    ){

      navigate("/admin");

    }

    else{

      setError(
        "Wrong information"
      );

    }

  };

  return (

    <section className="admin-login">

      <div className="admin-box">

        <h1>
          Admin Login
        </h1>

        {error &&

          <div className="error-box">
            {error}
          </div>

        }

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>

          Login

        </button>

      </div>

    </section>

  );

}