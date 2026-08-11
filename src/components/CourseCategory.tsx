const CourseCategory = () => {
  const categories = [
    {
      id: 1,
      title: "Mobile Development",
      description:
        "Learn to build modern mobile applications for Android and iOS.",
      courses: "12 Courses",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Web Development",
      description:
        "Build responsive and modern websites using the latest web technologies.",
      courses: "24 Courses",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Data Science",
      description:
        "Learn data analysis, machine learning, and turn data into useful insights.",
      courses: "18 Courses",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section className="py-12">
      {/* Heading */}
      <div className="mb-10 text-center">
        <h2 className="mb-3 text-3xl font-bold tracking-tight text-gray-900">
          Course Categories
        </h2>

        <p className="mx-auto max-w-2xl text-gray-600">
          Explore our popular learning categories and find the right course for
          your career.
        </p>
      </div>

      {/* Categories */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <div
            key={category.id}
            className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            {/* Image */}
            <img
              src={category.image}
              alt={category.title}
              className="h-52 w-full object-cover"
            />

            {/* Content */}
            <div className="p-5">
              <h3 className="mb-2 text-xl font-bold text-gray-900">
                {category.title}
              </h3>

              <p className="mb-4 text-sm leading-6 text-gray-600">
                {category.description}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-blue-600">
                  {category.courses}
                </span>

                <button
                  type="button"
                  className="rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                  Explore
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CourseCategory;
