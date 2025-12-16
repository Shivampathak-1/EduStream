import Hero from "../../components/Student/Hero";
import CategoryList from "../../components/Student/CategoryList";
import TopCourseList from "../../components/Student/TopCourseList";
import Testimonial from "../../components/Student/Testimonial";
const Home = () => {
  return (
    <main className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <Hero />
        <CategoryList />
        <TopCourseList />
        <Testimonial />
      </div>
    </main>
  );
};

export default Home;
