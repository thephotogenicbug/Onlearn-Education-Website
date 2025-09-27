import React, { useEffect, useRef, useState } from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser, userLogout } from "../../../redux/user_authSlice";
import { toast } from "react-toastify";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleNavbar = (navbar) => setNavbar(navbar);

  const dispatch = useDispatch();
  const { user, token } = useSelector((state) => state.user_auth);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch, token]);

  const handleLogout = () => {
    dispatch(userLogout());
    setOpen(false);
    toast.success("User logged out successfully");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <div className="w-full flex justify-between items-center p-5">
        {/* Logo */}
        <div>
          <img src={assets.logo} alt="Logo" className="h-[2.5rem]" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 font-medium">
          <Link to="/">
            <a className="cursor-pointer hover:text-[#FD661F]">Home</a>
          </Link>
          <li>
            <a className="cursor-pointer hover:text-[#FD661F]">Careers</a>
          </li>
          <li>
            <a className="cursor-pointer hover:text-[#FD661F]">Blogs</a>
          </li>
          <Link to="/contact-us">
            <a className="cursor-pointer hover:text-[#FD661F]">Contact Us</a>
          </Link>
          <li>
            <a className="cursor-pointer hover:text-[#FD661F]">About Us</a>
          </li>
        </ul>

        {/* User Profile */}
        {user ? (
          <div className="relative" ref={dropdownRef}>
            <div
              onClick={() => setOpen(!open)}
              className="flex justify-center items-center w-10 h-10 rounded-full bg-gradient-to-tr from-[#0B7077] to-[#095f63] text-white font-semibold text-lg shadow-md cursor-pointer transition-all hover:scale-105"
              title={user?.name}
            >
              {user?.name?.charAt(0).toUpperCase()}
            </div>

            {open && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50 overflow-hidden">
                <div className="px-4 py-3 text-sm text-gray-800 border-b font-medium">
                  {user.name}
                </div>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 cursor-pointer transition-all"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="hidden md:flex space-x-10">
            <Link to="/login">
              <button className="bg-white text-[#0B7077] px-8 py-3 rounded-lg uppercase cursor-pointer hover:bg-white/80">
                Log in
              </button>
            </Link>
            <Link to="/signup">
              <button className="bg-[#0B7077] px-8 py-3 rounded-lg text-white uppercase cursor-pointer hover:bg-[#0B7077]/90">
                Sign up
              </button>
            </Link>
          </div>
        )}

        {/* Mobile Hamburger */}
        <div className="flex md:hidden items-center">
          {navbar ? (
            <i
              onClick={() => handleNavbar(!navbar)}
              className="fa-solid fa-xmark text-3xl cursor-pointer"
            ></i>
          ) : (
            <i
              onClick={() => handleNavbar(!navbar)}
              className="fa-solid fa-bars text-3xl cursor-pointer"
            ></i>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {navbar && (
        <div className="flex md:hidden w-full bg-white p-4 rounded-lg">
          <ul className="flex flex-col space-y-4 font-medium w-full">
            <Link
              to="/"
              className="flex items-center gap-2 pl-4 text-gray-600 hover:text-[#FD661F]"
            >
              <i className="fa-solid fa-circle-chevron-right"></i>
              <a>Home</a>
            </Link>
            <li className="flex items-center gap-2 pl-4 text-gray-600 hover:text-[#FD661F]">
              <i className="fa-solid fa-circle-chevron-right"></i>
              Careers
            </li>
            <li className="flex items-center gap-2 pl-4 text-gray-600 hover:text-[#FD661F]">
              <i className="fa-solid fa-circle-chevron-right"></i>
              Blogs
            </li>
            <Link
              to="/contact-us"
              className="flex items-center gap-2 pl-4 text-gray-600 hover:text-[#FD661F]"
            >
              <i className="fa-solid fa-circle-chevron-right"></i>
              Contact Us
            </Link>
            <li className="flex items-center gap-2 pl-4 text-gray-600 hover:text-[#FD661F]">
              <i className="fa-solid fa-circle-chevron-right"></i>
              About Us
            </li>

            {/* Mobile login/signup */}
            {!user && (
              <div className="flex flex-col space-y-3 mt-4 px-4">
                <Link to="/login">
                  <button className="w-full cursor-pointer bg-[#0B7077] text-white px-6 py-3 rounded-lg uppercase hover:bg-[#095f63] transition">
                    Log in
                  </button>
                </Link>
                <Link to="/signup">
                  <button className="w-full cursor-pointer bg-[#0B7077] text-white px-6 py-3 rounded-lg uppercase hover:bg-[#095f63] transition">
                    Sign up
                  </button>
                </Link>
              </div>
            )}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
