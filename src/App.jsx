import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import AddCourseForm from "./pages/AddCourseForm";
import Dashboard from "./pages/Dashboard";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ViewCoursesAdmin from "./pages/ViewCoursesAdmin";
import UpdateCourseForm from "./pages/UpdateCourseForm";
import UserSignup from "./pages/UserSignup";
import UserLogin from "./pages/UserLogin";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<UserSignup />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/admin/signup" element={<Signup />} />
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/add-course" element={<AddCourseForm />} />
          <Route path="/admin/edit-course/:id" element={<UpdateCourseForm />} />
          <Route path="/admin/view-courses" element={<ViewCoursesAdmin />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
        <ToastContainer position="top-center" autoClose={3000} />
      </BrowserRouter>
    </>
  );
};

export default App;
