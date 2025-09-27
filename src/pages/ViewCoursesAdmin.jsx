import React, { useEffect } from "react";
import SideBar from "../components/SideBar/SideBar";
import { useDispatch, useSelector } from "react-redux";
import { deleteCourseAdmin, getCoursesAdmin } from "../../redux/courseSlice";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const ViewCoursesAdmin = () => {
  const dispatch = useDispatch();
  const { courses, error, loading } = useSelector((state) => state.course);

  const handleDelete = (course) => {
    if (
      window.confirm(`Are you sure you want to delete "${course.courseName}"?`)
    ) {
      dispatch(deleteCourseAdmin(course._id));
    }
  };

  useEffect(() => {
    dispatch(getCoursesAdmin());
  }, [dispatch]);

  useEffect(() => {
    if (error) toast.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <SideBar />

      <div className="w-full p-6 md:p-10 mt-20">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-[#0B7077]">
            Manage Courses
          </h1>
          <Link
            to="/admin/add-course"
            className="bg-[#0B7077] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#0B7077]/90 transition"
          >
            + Add New Course
          </Link>
        </div>

        {/* Loading & Empty States */}
        {loading ? (
          <div className="text-center py-10 text-gray-600 text-lg">
            Loading courses...
          </div>
        ) : courses?.length === 0 ? (
          <div className="text-center py-10 text-gray-600 text-lg">
            No courses found. Add some to get started!
          </div>
        ) : (
          <div className="overflow-x-auto bg-white rounded-2xl shadow-md border border-gray-200">
            <table className="w-full text-sm text-left">
              {/* Table Header */}
              <thead className="bg-gray-100 text-gray-700 text-xs uppercase">
                <tr>
                  <th className="px-6 py-4">Thumbnail</th>
                  <th className="px-6 py-4">Course Name</th>
                  <th className="px-6 py-4">Base Price</th>
                  <th className="px-6 py-4">Discounted Price</th>
                  <th className="px-6 py-4">Students</th>
                  <th className="px-6 py-4 text-center">Actions</th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-gray-100">
                {courses.map((course) => (
                  <tr
                    key={course._id}
                    className="hover:bg-gray-50 transition duration-150"
                  >
                    {/* Thumbnail */}
                    <td className="px-6 py-4">
                      <img
                        src={course.image}
                        alt={course.courseName}
                        className="w-20 h-14 object-cover rounded-lg border border-gray-200 shadow-sm"
                      />
                    </td>

                    {/* Course Info */}
                    <td className="px-6 py-4 font-medium text-gray-800">
                      {course.courseName}
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      ₹{course.Baseprice}
                    </td>
                    <td className="px-6 py-4">
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                        ₹{course.price}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                        {course.noOfStudents || 0} enrolled
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="px-6 py-4 flex justify-center gap-3">
                      <Link
                        to={`/admin/edit-course/${course._id}`}
                        className="p-2 bg-orange-100 text-orange-600 rounded-full hover:bg-orange-200 transition"
                        title="Edit Course"
                      >
                        <i className="fa-solid fa-pencil"></i>
                      </Link>
                      <button
                        onClick={() => handleDelete(course)}
                        className="p-2 bg-red-100 text-red-600 rounded-full hover:bg-red-200 transition"
                        title="Delete Course"
                      >
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewCoursesAdmin;
