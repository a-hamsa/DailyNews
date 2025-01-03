import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard"; 
import "./App.css";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/login" element={<Login />} /> 
          <Route path="/dashboard" element={<Dashboard />} /> 
          <Route path="/register" element={<Register />} /> 
        </Routes>
      </Router>
    </>
  );
}

export default App;