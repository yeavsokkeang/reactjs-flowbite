const PopularCourse = () => {
  const courses = [
    {
      id: 1,
      title: "React.js for Beginners",
      description:
        "Learn React fundamentals and build modern, interactive web applications from scratch.",
      price: "$49",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "JavaScript Masterclass",
      description:
        "Master modern JavaScript concepts and develop a strong foundation for web development.",
      price: "$59",
      image:
        "https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Tailwind CSS",
      description:
        "Create beautiful and responsive websites quickly using Tailwind CSS utility classes.",
      price: "$39",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section className="py-12">
      {/* Section Header */}
      <div className="text-center mb-10">
        <h2 className="mb-3 text-3xl font-bold tracking-tight text-gray-900">
          Popular Courses
        </h2>

        <p className="mx-auto max-w-2xl text-gray-600">
          Learn the most popular technologies and improve your development
          skills with our carefully designed courses.
        </p>
      </div>

      {/* Course Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <div
            key={course.id}
            className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            {/* Course Image */}
            <img
              src={course.image}
              alt={course.title}
              className="h-48 w-full object-cover"
            />

            {/* Card Content */}
            <div className="p-5">
              <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                {course.title}
              </h3>

              <p className="mb-6 text-sm leading-6 text-gray-600">
                {course.description}
              </p>

              {/* Price + Button */}
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-blue-600">
                  {course.price}
                </span>

                <button
                  type="button"
                  className="rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularCourse;
