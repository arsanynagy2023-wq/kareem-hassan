import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";

import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Grades from "./pages/Grades";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";

import FirstPrep from "./pages/FirstPrep";
import SecondPrep from "./pages/SecondPrep";
import ThirdPrep from "./pages/ThirdPrep";

function App() {

  return (

    <>

      <Header />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/courses" element={<Courses />} />

        <Route path="/grades" element={<Grades />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/admin-login" element={<AdminLogin />} />

        <Route path="/admin" element={<AdminDashboard />} />

        <Route path="/admin/first" element={<FirstPrep />} />

        <Route path="/admin/second" element={<SecondPrep />} />

        <Route path="/admin/third" element={<ThirdPrep />} />

      </Routes>

    </>

  );

}

export default App;