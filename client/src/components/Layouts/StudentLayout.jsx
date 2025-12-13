import Navbar from "../Common/Navbar";
import Footer from "../Common/Footer";
import { Outlet } from "react-router-dom";

const StudentLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default StudentLayout;
