import React, { useEffect } from "react";
import { assets } from "../../assets/assets";
import { useDispatch, useSelector } from "react-redux";
import { getCoursePublic } from "../../../redux/courseSlice";
import { Link } from "react-router-dom";

const PopularCourses = () => {
  const dispatch = useDispatch();
  const { courses_public, error, loading } = useSelector(
    (state) => state.course
  );

  useEffect(() => {
    dispatch(getCoursePublic());
  }, [dispatch]);

  const tabs = [
    "All Programme",
    "UI/UX Design",
    "Program Design",
    "Programming",
    "Data Science",
    "Data Analytics",
  ];
  const activeTab = "All Programme"; // State would manage this in a real app

  return (
    <>
      <div className=" mt-36  flex justify-center items-center">
        <div className=" flex justify-center md:justify-between items-center">
          <h1 className=" text-[30px] md:text-[40px] text-[#FD661F] font-bold relative ">
            Popular Courses
            <svg
              className="absolute bottom-[-20px] -right-[140px] -translate-x-1/2 w-[200px] h-4"
              viewBox="0 0 100 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 5 Q50 0 100 5"
                stroke="#0B7077"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </h1>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-2 mb-12 px-4 mt-10">
        {tabs.map((tab) => (
          <button
            key={tab}
            // Active tab styling
            className={`
              px-5 py-2 text-sm font-medium rounded-full border transition duration-300 whitespace-nowrap
              ${
                tab === activeTab
                  ? "bg-[#0B7077] text-white border-[#0A4F3D]" // Active (Dark Teal)
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50" // Inactive
              }
            `}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className=" grid grid-cols-1 gap-y-12 md:grid-cols-4 md:gap-56 place-items-center mt-10">
        {courses_public?.map((course) => {
          return (
            <div
              className=" w-[320px]  flex flex-col flex-wrap bg-white shadow-xl rounded-xl"
              key={course._id}
            >
              <div>
                <img
                  src={course.image}
                  alt=""
                  className="rounded-t-xl w-[350px] h-[150px] object-cover"
                />
              </div>
              <div>
                <div className=" flex flex-row items-center justify-center w-[250px] bg-white shadow-xl rounded-full p-2 relative left-10 bottom-4 gap-2">
                  <div>
                    <img src={assets.course_users} alt="" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-700">
                      {" "}
                      {course.noOfStudents} students{" "}
                    </p>
                  </div>
                </div>
                <p className=" pt-1 pl-4 pr-4 text-sm text-gray-500">
                  {new Date(course.createdAt).toLocaleDateString()}
                </p>
                <h2 className="text-[#0B7077] text-[17px] font-bold pt-4 pl-4 pr-4 h-[48px]">
                  {course.courseName}
                </h2>
                <p className=" text-sm text-gray-600 p-4 mt-2 text-wrap">
                  {course.courseDesc}
                </p>
              </div>
              <div className=" flex flex-row  items-center justify-around p-3 mb-5">
                <div className=" flex flex-row items-center justify-center gap-3">
                  <h2 className="text-[#FD661F] text-[16px] font-bold">
                    $ {course.price}
                  </h2>
                  <h2 className="text-gray-500 text-[16px] line-through">
                    $ {course.Baseprice}
                  </h2>
                </div>
                <div>
                  <Link to={`/${course.courseName}/${course._id}`}>
                    <button className="bg-[#0B7077] text-white px-6 py-2.5 rounded-lg cursor-pointer ">
                      Enroll Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}

        {/* <div className=" w-[320px] flex flex-col flex-wrap bg-white shadow-xl rounded-xl">
          <div>
            <img
              src={assets.course_2}
              alt=""
              className="rounded-t-xl w-[350px] h-[150px] object-cover"
            />
          </div>
          <div>
            <div className=" flex flex-row items-center justify-center w-[250px] bg-white shadow-xl rounded-full p-2 relative left-10 bottom-4 gap-2">
              <div>
                <img src={assets.course_users} alt="" />
              </div>
              <div>
                <p className="text-sm text-gray-700">+40 students </p>
              </div>
            </div>
            <p className=" pt-1 pl-4 pr-4 text-sm text-gray-500">
              1 - 28 July 2022
            </p>
            <h2 className="text-[#0B7077] text-[17px] font-bold pt-4 pl-4 pr-4 h-[48px]">
              BM Data Science Professional Certificate
            </h2>
            <p className=" text-sm text-gray-600 p-4 mt-2   text-wrap">
              Product Management Masterclass, you will learn with Sarah Johnson
              - Head of Product Customer Platform Gojek Indonesia.
            </p>
          </div>
          <div className=" flex flex-row  items-center justify-around p-3 mb-5">
            <div className=" flex flex-row items-center justify-center gap-3">
              <h2 className="text-[#FD661F] text-[16px] font-bold">$ 678</h2>
              <h2 className="text-gray-500 text-[16px] line-through">$ 500</h2>
            </div>
            <div>
              <button className="bg-[#0B7077] text-white px-6 py-2.5 rounded-lg cursor-pointer ">
                Enroll Now
              </button>
            </div>
          </div>
        </div>
        <div className=" w-[320px] flex flex-col flex-wrap bg-white shadow-xl rounded-xl">
          <div>
            <img
              src={assets.course_3}
              alt=""
              className="rounded-t-xl w-[350px] h-[150px] object-cover"
            />
          </div>
          <div>
            <div className=" flex flex-row items-center justify-center w-[250px] bg-white shadow-xl rounded-full p-2 relative left-10 bottom-4 gap-2">
              <div>
                <img src={assets.course_users} alt="" />
              </div>
              <div>
                <p className="text-sm text-gray-700">+40 students </p>
              </div>
            </div>
            <p className=" pt-1 pl-4 pr-4 text-sm text-gray-500">
              1 - 28 July 2022
            </p>
            <h2 className="text-[#0B7077] text-[17px] font-bold pt-4 pl-4 pr-4 h-[48px]">
              The Science of Well-Being
            </h2>
            <p className=" text-sm text-gray-600 p-4 mt-2   text-wrap">
              Product Management Masterclass, you will learn with Sarah Johnson
              - Head of Product Customer Platform Gojek Indonesia.
            </p>
          </div>
          <div className=" flex flex-row  items-center justify-around p-3 mb-5">
            <div className=" flex flex-row items-center justify-center gap-3">
              <h2 className="text-[#FD661F] text-[16px] font-bold">$ 123</h2>
              <h2 className="text-gray-500 text-[16px] line-through">$ 500</h2>
            </div>
            <div>
              <button className="bg-[#0B7077] text-white px-6 py-2.5 rounded-lg cursor-pointer ">
                Enroll Now
              </button>
            </div>
          </div>
        </div>
        <div className=" w-[320px] flex flex-col flex-wrap bg-white shadow-xl rounded-xl">
          <div>
            <img
              src={assets.course_4}
              alt=""
              className="rounded-t-xl w-[350px] h-[150px] object-cover"
            />
          </div>
          <div>
            <div className=" flex flex-row items-center justify-center w-[250px] bg-white shadow-xl rounded-full p-2 relative left-10 bottom-4 gap-2">
              <div>
                <img src={assets.course_users} alt="" />
              </div>
              <div>
                <p className="text-sm text-gray-700">+40 students </p>
              </div>
            </div>
            <p className=" pt-1 pl-4 pr-4 text-sm text-gray-500">
              1 - 28 July 2022
            </p>
            <h2 className="text-[#0B7077] text-[17px] font-bold pt-4 pl-4 pr-4 h-[48px]">
              Python for Everybody Specialization
            </h2>
            <p className=" text-sm text-gray-600 p-4 mt-2   text-wrap">
              Product Management Masterclass, you will learn with Sarah Johnson
              - Head of Product Customer Platform Gojek Indonesia.
            </p>
          </div>
          <div className=" flex flex-row  items-center justify-around p-3 mb-5">
            <div className=" flex flex-row items-center justify-center gap-3">
              <h2 className="text-[#FD661F] text-[16px] font-bold">$ 567</h2>
              <h2 className="text-gray-500 text-[16px] line-through">$ 700</h2>
            </div>
            <div>
              <button className="bg-[#0B7077] text-white px-6 py-2.5 rounded-lg cursor-pointer ">
                Enroll Now
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default PopularCourses;
