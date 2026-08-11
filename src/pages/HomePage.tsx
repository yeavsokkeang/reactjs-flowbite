import CourseCategory from "../components/CourseCategory";
import Hero from "../components/Hero";
import PopularCourse from "../components/PopularCourse";
import SocialProof from "../components/SocialProof";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <PopularCourse />
      <CourseCategory />
      <SocialProof />
    </div>
  );
};

export default HomePage;
