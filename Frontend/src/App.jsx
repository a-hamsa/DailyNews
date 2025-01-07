import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Dashboard from "./pages/admin/Dashboard"; 
import "./App.css";
import Register from "./pages/Register";
import NewsDetails from "./pages/NewsDetails";
import News from "./pages/admin/News";
import AddNews from "./pages/admin/AddNews";
import EditNews from "./pages/admin/EditNews";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/login" element={<Login />} /> 
          <Route path="/dashboard" element={<Dashboard />} /> 
          <Route path="/register" element={<Register />} /> 
          <Route path="/news/:id" element={<NewsDetails />} />
          <Route path="/dashboard/news" element={<News />} />
          <Route path="/dashboard/news/add" element={<AddNews />} />
          <Route path="/dashboard/news/edit/:id" element={<EditNews />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;