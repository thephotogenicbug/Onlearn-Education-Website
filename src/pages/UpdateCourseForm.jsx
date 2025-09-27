import React, { useCallback, useEffect, useState } from "react";
import SideBar from "../components/SideBar/SideBar";
import { useDropzone } from "react-dropzone";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { updateCourseAdmin } from "../../redux/courseSlice";
import { useParams } from "react-router-dom";
import axios from "axios";

const API = import.meta.env.VITE_BACKEND_URL;

const UpdateCourseForm = () => {
  const { id } = useParams();
  const [courseName, setCourseName] = useState("");
  const [description, setDescription] = useState("");
  const [basePrice, setBasePrice] = useState("");
  const [discountedPrice, setDiscountedPrice] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const dispatch = useDispatch();
  const { course, loading, error } = useSelector((state) => state.course);

  // Fetch course data
  const fetchCourseData = async () => {
    try {
      const { data } = await axios.get(`${API}/course/get-course-admin/${id}`, {
        withCredentials: true,
      });
      const course = data.course;
      setCourseName(course.courseName || "");
      setDescription(course.courseDesc || "");
      setBasePrice(course.Baseprice || "");
      setDiscountedPrice(course.price || "");
      setImage(null); // reset file input
      setPreview(course.image || null); // show current image
    } catch (err) {
      toast.error("Failed to fetch course data");
    }
  };

  useEffect(() => {
    fetchCourseData();
  }, [id]);

  // Dropzone handler
  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      setImage(acceptedFiles[0]);
      setPreview(URL.createObjectURL(acceptedFiles[0]));
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple: false,
  });

  // Form submit
  const SubmitForm = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("coursename", courseName);
    formData.append("coursedesc", description);
    formData.append("Baseprice", basePrice);
    formData.append("price", discountedPrice);
    if (image) formData.append("image", image); // only append if new image selected

    dispatch(updateCourseAdmin({ id, updatedData: formData }));
  };

  // Toasts
  useEffect(() => {
    if (course) {
      toast.success("Course Updated Successfully");
    }
  }, [course]);

  useEffect(() => {
    if (error) toast.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <SideBar />

      <div className="flex-1 p-6 md:p-12 mt-20">
        <div className="mb-8">
          <p className="text-gray-500 text-sm uppercase tracking-wide">Form</p>
          <h1 className="text-3xl md:text-4xl font-bold text-[#0B7077]">
            Update Course
          </h1>
        </div>

        <form onSubmit={SubmitForm} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <input
              type="text"
              placeholder="Course Name"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0B7077] shadow-sm"
              required
            />
            <input
              type="number"
              placeholder="Base Price"
              value={basePrice}
              onChange={(e) => setBasePrice(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0B7077] shadow-sm"
              required
            />
            <input
              type="number"
              placeholder="Discounted Price"
              value={discountedPrice}
              onChange={(e) => setDiscountedPrice(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0B7077] shadow-sm"
              required
            />
          </div>

          <textarea
            placeholder="Course Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-4 min-h-[140px] resize-none focus:outline-none focus:ring-2 focus:ring-[#0B7077] shadow-sm"
            required
          />

          <div
            {...getRootProps()}
            className={`border-2 border-dashed rounded-xl px-6 py-12 text-center cursor-pointer transition-all hover:border-[#0B7077] ${
              isDragActive
                ? "border-[#0B7077] bg-[#f0fdfa]"
                : "border-gray-300 bg-white"
            }`}
          >
            <input {...getInputProps()} />
            {isDragActive ? (
              <p className="text-[#0B7077] font-medium">
                Drop the image here...
              </p>
            ) : preview ? (
              <div className="flex flex-col items-center">
                <p className="text-gray-700 font-medium mb-4">
                  {image?.name || "Current Thumbnail"}
                </p>
                <img
                  src={preview}
                  alt="preview"
                  className="w-40 h-28 object-cover rounded-lg shadow-md"
                />
              </div>
            ) : (
              <p className="text-gray-500">
                Drag & drop course image here, or{" "}
                <span className="text-[#0B7077] font-semibold">
                  click to select
                </span>
              </p>
            )}
          </div>

          <div>
            <button
              type="submit"
              className="flex items-center cursor-pointer justify-center bg-[#0B7077] text-white text-sm px-6 py-3 rounded-xl hover:bg-[#0B7077]/90 transition-all shadow-lg"
            >
              {loading ? "Updating..." : "Update Course"}
              <i className="fa-solid fa-arrow-right ml-2"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCourseForm;
