import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { useDispatch, useSelector } from "react-redux";
import { userRegister } from "../../redux/user_authSlice";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

const UserSignup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, token, loading, error } = useSelector(
    (state) => state.user_auth
  );

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);

    dispatch(userRegister(formData));
    setSubmitted(true);
  };

  useEffect(() => {
    if (user && token && submitted) {
      toast.success("Registration successful!");
      setTimeout(() => navigate("/"), 1500);
    }
  }, [user, token, submitted, navigate]);

  useEffect(() => {
    if (error && submitted) {
      toast.error(error);
      setSubmitted(false);
    }
  }, [error, submitted]);

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-[#e0f7f9] to-[#f0fcfc]">
      {/* Left Image (Desktop Only) */}
      <div className="w-1/2 h-screen hidden md:block">
        <img
          src={assets.login_img}
          alt="Signup"
          className="w-full h-full object-cover rounded-r-md"
        />
      </div>

      {/* Signup Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <div className="w-full max-w-md px-8 py-12 bg-white shadow-2xl rounded-2xl flex flex-col items-center">
          <h1 className="text-3xl text-center text-[#0B7077] font-bold uppercase mb-8 tracking-wide">
            Signup
          </h1>

          <form onSubmit={handleSubmit} className="w-full space-y-5">
            <input
              type="text"
              placeholder="Username"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="bg-gray-100 w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0B7077] transition-all"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-gray-100 w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0B7077] transition-all"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="bg-gray-100 w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0B7077] transition-all"
            />
            <button
              type="submit"
              className="w-full bg-[#0B7077] text-white p-3 rounded-lg hover:bg-[#095f63] transition cursor-pointer uppercase font-semibold"
              disabled={loading}
            >
              {loading ? "Please wait..." : "Signup"}
            </button>
            {token
              ? error && <p className="text-red-500 text-center">{error}</p>
              : ""}
          </form>

          <p className="text-gray-500 text-sm mt-6 text-center">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-[#0B7077] font-semibold hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserSignup;
