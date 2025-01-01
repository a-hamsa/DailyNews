import Navbar from "./components/Navbar";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import "./App.css";

function App() {
  const slides = [
    { image: "/images/news1.jpg", caption: "Breaking News: Event 1" },
    { image: "/images/news2.jpg", caption: "Latest Update: Event 2" },
    { image: "/images/news3.jpg", caption: "Hotline: Event 3" },
  ];
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />{" "}
          <Route path="/login" element={<Login />} /> {/* Login Page */}
        </Routes>
      </Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
      </div>
      {/* <Carousel slides={slides} /> */}
    </>
  );
}

export default App;
