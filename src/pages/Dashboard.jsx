import React from "react";
import { assets } from "../assets/assets";
import SideBar from "../components/SideBar/SideBar";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Courses",
      value: 2,
      icon: "fa-book-open",
      bg: "bg-blue-500",
    },
    {
      title: "Total Enrolled",
      value: 1,
      icon: "fa-person-circle-plus",
      bg: "bg-green-500",
    },
    {
      title: "Total Completed",
      value: 1,
      icon: "fa-list-ul",
      bg: "bg-yellow-500",
    },
    {
      title: "Total Students",
      value: 10,
      icon: "fa-graduation-cap",
      bg: "bg-purple-500",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <SideBar />

      <div className="flex-1 p-6 md:p-12 mt-20">
        <div className="flex flex-row items-center space-x-5 mb-12">
          <img
            src={assets.user_1}
            alt="User"
            className="w-16 h-16 rounded-full"
          />
          <div>
            <h1 className="text-2xl font-semibold text-gray-700">
              Welcome John Doe
            </h1>
            <p className="text-gray-500 mt-1">
              Here’s an overview of your courses
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col justify-between w-full h-36 bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex justify-between items-center">
                <h2 className="text-gray-600 font-semibold">{stat.title}</h2>
                <div className={`${stat.bg} p-3 rounded-lg text-white text-lg`}>
                  <i className={`fa-solid ${stat.icon}`}></i>
                </div>
              </div>
              <p className="mt-4 text-2xl font-bold text-gray-700">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
