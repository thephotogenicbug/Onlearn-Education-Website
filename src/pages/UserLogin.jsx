import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { userLogin } from "../../redux/user_authSlice";
import { toast } from "react-toastify";

const UserLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, loading, error, token } = useSelector(
    (state) => state.user_auth
  );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    dispatch(userLogin(formData));
  };

  useEffect(() => {
    if (user && token) {
      toast.success("Login success");
      setTimeout(() => {
        navigate("/");
      }, 1500);
    }
  }, [user, token, navigate]);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-[#e0f7f9] to-[#f0fcfc]">
      <div className="w-1/2 h-screen hidden md:block">
        <img
          src={assets.login_img}
          alt="Login"
          className="w-full h-full object-cover rounded-r-md"
        />
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center">
        <div className="w-full max-w-md px-8 py-12 bg-white shadow-2xl rounded-2xl flex flex-col items-center">
          <h1 className="text-3xl text-center text-[#0B7077] font-bold uppercase mb-8 tracking-wide">
            Login
          </h1>

          <form onSubmit={handleSubmit} className="w-full space-y-5">
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
            >
              {loading ? "Please wait" : "Login"}
            </button>
            {error && <p className="text-red-500 text-center">{error}</p>}
          </form>

          <p className="text-gray-500 text-sm mt-6 text-center">
            Don’t have an account?{" "}
            <Link
              to="/signup"
              className="text-[#0B7077] font-semibold hover:underline"
            >
              Signup
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
