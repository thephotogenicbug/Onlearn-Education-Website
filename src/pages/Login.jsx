import React, { useEffect, useState } from "react";
import LayoutWrapper from "../components/LayoutWrapper/LayoutWrapper";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginAdmin } from "../../redux/authSlice";
import { toast } from "react-toastify";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [submitted, setSubmitted] = useState(false);

  const { user, loading, error, token } = useSelector((state) => state.auth);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginAdmin(formData));
    setSubmitted(true);
  };

  useEffect(() => {
    if (user && token && submitted) {
      toast.success("Login successful!");
      setTimeout(() => navigate("/admin/dashboard"), 1500);
    }
  }, [user, token, submitted, navigate]);

  useEffect(() => {
    if (error && submitted) {
      toast.error(error);
      setSubmitted(false);
    }
  }, [error, submitted]);

  return (
    <div className="h-screen flex items-center justify-center p-5 bg-gradient-to-br from-[#e0f7f9] to-[#f0fcfc]">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-8 flex flex-col items-center">
        <h1 className="text-[#0B7077] text-2xl font-bold mb-6 uppercase tracking-wide">
          Admin Login
        </h1>

        <form onSubmit={handleSubmit} className="w-full">
          <div className="flex flex-col space-y-5">
            <input
              type="text"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              required
              className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0B7077] bg-gray-100 transition-all"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              required
              className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0B7077] bg-gray-100 transition-all"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full cursor-pointer h-12 bg-[#0B7077] text-white rounded-lg font-semibold uppercase hover:bg-[#0B7077]/90 transition-all"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>
        </form>
        <p className="text-gray-500 text-sm mt-6 text-center">
          Already have an account?{" "}
          <Link
            to="/admin/signup"
            className="text-[#0B7077] font-semibold hover:underline"
          >
            Signup
          </Link>
        </p>

        <p className="text-gray-400 text-sm mt-6 text-center">
          © 2025 Admin Panel. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Login;
