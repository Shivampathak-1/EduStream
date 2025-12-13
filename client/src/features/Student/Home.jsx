import Hero from "../../components/Student/Hero";
import CategoryList from "../../components/Student/CategoryList";
import TopCourseList from "../../components/Student/TopCourseList";
import Testimonial from "../../components/Student/Testimonial";
const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Hero />
        <CategoryList />
        <TopCourseList />
        <Testimonial />
      </main>
    </div>
  );
};

export default Home;
