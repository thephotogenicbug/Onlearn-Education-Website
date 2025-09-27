import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-r from-gray-100 to-gray-200 px-4">
      <div className="text-center">
        <h1 className="text-[140px] font-extrabold text-[#0B7077]">404</h1>
        <h2 className="text-4xl font-bold mt-2 text-[#0B7077]">
          Page Not Found
        </h2>
        <p className="mt-4 text-[#0B7077] max-w-md mx-auto">
          Oops! The page you are looking for does not exist. It might have been
          moved or deleted.
        </p>
        <Link
          to="/"
          className="mt-8 inline-block px-8 py-4 bg-[#0B7077] text-white font-semibold rounded-full shadow-lg hover:bg-gray-900 transition-all transform hover:scale-105"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
