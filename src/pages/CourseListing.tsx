import { useMemo, useState } from "react";
import {
  Card,
  Dropdown,
  DropdownItem,
  TextInput,
  Button,
  Badge,
} from "flowbite-react";
import { HiSearch, HiChevronDown } from "react-icons/hi";

interface Course {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

const courses: Course[] = [
  {
    id: 1,
    title: "React JS for Beginners",
    description:
      "Learn React from scratch and build modern interactive web applications.",
    price: 49,
    category: "Web Development",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Advanced Tailwind CSS",
    description:
      "Master Tailwind CSS and create beautiful responsive interfaces faster.",
    price: 39,
    category: "Web Development",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Flutter Mobile Development",
    description:
      "Build cross-platform mobile applications using Flutter and Dart.",
    price: 59,
    category: "Mobile Development",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Python for Data Science",
    description:
      "Learn Python, data analysis, visualization, and essential data science concepts.",
    price: 69,
    category: "Data Science",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "TypeScript Masterclass",
    description:
      "Write safer and more scalable JavaScript applications with TypeScript.",
    price: 45,
    category: "Web Development",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "Machine Learning Basics",
    description:
      "Understand machine learning fundamentals and build your first ML models.",
    price: 79,
    category: "Data Science",
    image:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&q=80",
  },
];

export default function CourseListing() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Courses");

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesSearch =
        course.title.toLowerCase().includes(search.toLowerCase()) ||
        course.description.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        category === "All Courses" || course.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  return (
    <section className="min-h-screen bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ================= HEADER ================= */}
        <div className="mb-10 text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-blue-600">
            Learn & Grow
          </span>

          <h1 className="mb-3 text-3xl font-bold text-gray-900 md:text-4xl">
            Explore Our Courses
          </h1>

          <p className="mx-auto max-w-2xl text-gray-500">
            Learn practical skills from experienced instructors and build
            knowledge that helps you grow your career.
          </p>
        </div>

        {/* ================= SEARCH & FILTER ================= */}
        <div className="mb-10 flex flex-col gap-3 rounded-lg bg-gray-50 p-3 sm:flex-row">
          {/* Search */}
          <div className="flex-1">
            <TextInput
              icon={HiSearch}
              type="text"
              placeholder="Search courses..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="[&_input]:bg-white! [&_input]:text-gray-900! [&_input]:placeholder-gray-500!"
            />
          </div>

          {/* Filter */}
          <Dropdown
            label={category}
            dismissOnClick={true}
            renderTrigger={() => (
              <Button
                color="light"
                className="w-full border-0 bg-white text-gray-700 shadow-sm hover:bg-gray-50 sm:w-auto"
              >
                {category}
                <HiChevronDown className="ml-2 h-4 w-4" />
              </Button>
            )}
          >
            <DropdownItem onClick={() => setCategory("All Courses")}>
              All Courses
            </DropdownItem>

            <DropdownItem onClick={() => setCategory("Web Development")}>
              Web Development
            </DropdownItem>

            <DropdownItem onClick={() => setCategory("Mobile Development")}>
              Mobile Development
            </DropdownItem>

            <DropdownItem onClick={() => setCategory("Data Science")}>
              Data Science
            </DropdownItem>
          </Dropdown>
        </div>

        {/* ================= RESULT INFO ================= */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm text-gray-500">
            <span className="font-semibold text-gray-900">
              {filteredCourses.length}
            </span>{" "}
            courses available
          </p>

          {category !== "All Courses" && <Badge color="info">{category}</Badge>}
        </div>

        {/* ================= COURSE GRID ================= */}
        {filteredCourses.length > 0 ? (
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCourses.map((course) => (
              <Card
                key={course.id}
                className="group overflow-hidden! rounded-lg! border-0! bg-white! p-0! shadow-md! transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Course Image */}
                <div className="-mx-5 -mt-5 mb-4 h-52 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Card Content */}
                <div className="px-1 pb-1">
                  {/* Category */}
                  <Badge color="info" className="mb-3 w-fit">
                    {course.category}
                  </Badge>

                  {/* Title */}
                  <h5 className="mb-2 text-xl font-bold leading-7 text-gray-900!">
                    {course.title}
                  </h5>

                  {/* Description */}
                  <p className="mb-6 min-h-18 text-sm leading-6 text-gray-500!">
                    {course.description}
                  </p>

                  {/* Bottom */}
                  <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                    <div>
                      <p className="text-xs text-gray-400!">Course Price</p>

                      <span className="text-2xl font-bold text-blue-600!">
                        ${course.price}
                      </span>
                    </div>

                    <Button color="blue" className="px-5">
                      View Course
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          /* ================= EMPTY STATE ================= */
          <div className="py-20 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50">
              <HiSearch className="h-7 w-7 text-blue-500" />
            </div>

            <h3 className="mb-2 text-lg font-semibold text-gray-900">
              No courses found
            </h3>

            <p className="text-sm text-gray-500">
              Try searching for another course or selecting a different
              category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
