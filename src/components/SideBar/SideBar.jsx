import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";
import { useDispatch } from "react-redux";
import { logoutAdmin } from "../../../redux/authSlice";
import { toast } from "react-toastify";

const menuItems = [
  { icon: "fa-house", label: "Dashboard", path: "/admin/dashboard" },
  { icon: "fa-shapes", label: "Add New Course", path: "/admin/add-course" },
  {
    icon: "fa-user-graduate",
    label: "View Courses",
    path: "/admin/view-courses",
  },
  // { icon: "fa-arrows-to-eye", label: "Assessments", path: "/admin/dashboard" },
  // {
  //   icon: "fa-certificate",
  //   label: "Certifications",
  //   path: "/admin/add-course",
  // },
  // { icon: "fa-tarp-droplet", label: "Projects", path: "/admin/add-course" },
  { icon: "fa-right-from-bracket", label: "Logout" },
];

const SideBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutAdmin());
    toast.success("Logged out successfully");
    navigate("/admin/login");
  };

  return (
    <div
      className={`bg-gradient-to-b from-white to-gray-100 shadow-2xl h-screen flex flex-col transition-all duration-300 ${
        isCollapsed ? "w-[80px]" : "w-[260px]"
      } rounded-r-2xl relative`}
    >
      <div className="flex items-center justify-between p-4 border-b">
        {!isCollapsed && (
          <img src={assets.logo} alt="logo" className="w-32 object-contain" />
        )}
        <button
          onClick={() => setIsCollapsed((prev) => !prev)}
          className="text-gray-600 text-xl focus:outline-none hover:text-[#0B7077] transition-colors"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>

      <ul className="flex-1 mt-6">
        {menuItems.map(({ icon, label, path }) => {
          const isActive = path && location.pathname === path;
          const content = (
            <>
              <i
                className={`fa-solid ${icon} text-lg transition-transform duration-300 ${
                  isActive
                    ? "text-[#0B7077]"
                    : "text-gray-600 group-hover:text-[#0B7077]"
                }`}
              ></i>
              {!isCollapsed && (
                <span className="ml-4 text-sm font-semibold">{label}</span>
              )}
            </>
          );

          return (
            <li key={label} className="group relative">
              {path ? (
                <Link
                  to={path}
                  className={`flex items-center gap-4 px-4 py-3 rounded-lg mx-2 my-1 transition-all duration-300
                    ${
                      isActive
                        ? "bg-[#0B7077]/10 text-[#0B7077] font-semibold shadow-md"
                        : "text-gray-700 hover:bg-[#0B7077]/10 hover:text-[#0B7077]"
                    }`}
                >
                  {content}
                  {isCollapsed && (
                    <span className="absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-[#0B7077] text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                      {label}
                    </span>
                  )}
                  {!isCollapsed && isActive && (
                    <span className="absolute left-0 top-0 h-full w-1 bg-[#0B7077] rounded-r-lg"></span>
                  )}
                </Link>
              ) : (
                <div
                  onClick={handleLogout}
                  className="flex items-center gap-4 px-4 py-3 rounded-lg mx-2 my-1 cursor-pointer transition-all duration-300 hover:bg-[#0B7077]/10 hover:text-[#0B7077] text-gray-700 group"
                >
                  {content}
                  {isCollapsed && (
                    <span className="absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-[#0B7077] text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                      {label}
                    </span>
                  )}
                </div>
              )}
            </li>
          );
        })}
      </ul>

      {!isCollapsed && (
        <div className="p-4 text-gray-500 text-xs border-t flex justify-center">
          Admin Panel © 2025
        </div>
      )}
    </div>
  );
};

export default SideBar;
