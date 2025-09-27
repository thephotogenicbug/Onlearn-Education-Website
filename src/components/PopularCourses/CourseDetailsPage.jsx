import React from "react";

const courseDetails = {
  id: 1,
  title: "Product Management Basic - Course",
  subtitle: "Master the fundamentals of product lifecycle and strategy.",
  instructor: "Sarah Johnson",
  instructorTitle: "Head of Product Customer Platform, Gojek Indonesia",
  rating: 4.8,
  reviews: 1250,
  currentPrice: 350,
  oldPrice: 500,
  imageSrc:
    "https://res.cloudinary.com/dv5jjlsd7/image/upload/v1758953415/courses/sk5zcny0malqsmjnvvxr.png",
  duration: "4 Weeks",
  commitment: "10 hours/week",
  certificate: "Yes",
  description:
    "This comprehensive course covers everything from ideation and market research to roadmapping and launch strategy. Learn to build and scale products that customers love. It is highly practical and includes real-world case studies.",
  curriculum: [
    { module: "Module 1: Product Strategy & Vision", lessons: 5 },
    { module: "Module 2: Market Research & Validation", lessons: 4 },
    { module: "Module 3: Agile Development & Roadmaps", lessons: 6 },
    { module: "Module 4: Product Launch & Metrics", lessons: 3 },
  ],
};

const CourseDetailsPage = () => {
  const StarIcon = () => <span className="text-yellow-500">⭐</span>;
  const CheckIcon = () => <span className="text-teal-600">✅</span>;

  const headerBgColor = "bg-gray-800";
  const primaryColor = "bg-[#0B7077] hover:bg-[#0B7077]/90";

  return (
    <div className="min-h-screen bg-gray-50">
      <header className={`${headerBgColor} py-12 text-white`}>
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-2">
            {courseDetails.title}
          </h1>
          <p className="text-xl font-light mb-4 text-gray-300">
            {courseDetails.subtitle}
          </p>

          <div className="flex items-center space-x-6 text-sm">
            <div className="flex items-center">
              <StarIcon />
              <span className="ml-1 font-semibold">{courseDetails.rating}</span>
              <span className="ml-1 text-gray-400">
                ({courseDetails.reviews} reviews)
              </span>
            </div>
            <p>
              <span className="text-gray-400">Created by: </span>
              <span className="font-semibold">{courseDetails.instructor}</span>
            </p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 md:px-8 py-12 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-2/3">
            <section className="mb-10 p-6 bg-white rounded-xl shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">
                What You'll Learn
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {courseDetails.description}
              </p>

              <div className="mt-6 grid grid-cols-3 gap-4 text-sm font-medium text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckIcon />
                  <span>Duration: {courseDetails.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckIcon />
                  <span>Commitment: {courseDetails.commitment}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckIcon />
                  <span>Certificate: {courseDetails.certificate}</span>
                </div>
              </div>
            </section>

            <section className="mb-10 p-6 bg-white rounded-xl shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">
                Curriculum
              </h2>
              <ul className="space-y-3">
                {courseDetails.curriculum.map((item, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center py-2 px-3 border-b last:border-b-0 bg-gray-50 rounded-lg"
                  >
                    <span className="font-semibold text-gray-700">
                      {item.module}
                    </span>
                    <span className="text-sm text-gray-500">
                      {item.lessons} lessons
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="p-6 bg-white rounded-xl shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">
                About the Instructor
              </h2>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center text-xl font-bold text-gray-600">
                  SJ
                </div>
                <div>
                  <p className="font-bold text-lg">
                    {courseDetails.instructor}
                  </p>
                  <p className="text-sm text-gray-500">
                    {courseDetails.instructorTitle}
                  </p>
                </div>
              </div>
            </section>
          </div>

          <div className="lg:w-1/3">
            <div className="lg:sticky lg:top-10 bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200">
              <img
                src={courseDetails.imageSrc}
                alt={courseDetails.title}
                className="w-full h-auto object-cover"
              />

              <div className="p-6">
                <div className="mb-6 flex items-baseline space-x-3">
                  <span className="text-4xl font-extrabold text-orange-600">
                    ${courseDetails.currentPrice}
                  </span>
                  <span className="text-xl text-gray-400 line-through">
                    ${courseDetails.oldPrice}
                  </span>
                </div>

                <button
                  className={`w-full cursor-pointer py-3 rounded-lg text-white font-bold text-lg transition duration-300 ${primaryColor} shadow-lg`}
                  onClick={() => alert("Redirecting to application page!")}
                >
                  Apply to Course
                </button>

                <p className="text-center text-xs text-gray-500 mt-3">
                  30-Day Money-Back Guarantee
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CourseDetailsPage;
