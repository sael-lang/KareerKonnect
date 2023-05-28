import React, { useEffect } from "react";
// import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Search from "./Search/Search";
import Service from "./Service/Service";
import Recommend from "./Recommend/Recommend";
import Testimonials from "./Testimonials/Testimonials";
import Footer from "./Footer/Footer";
import ScrollTop from "./Scroll/ScrollTop";
import scrollreveal from "scrollreveal";
import Project from "./Projects/Project";
const MainPage = () => {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });
    sr.reveal(
      `
        nav,
        #hero,
        #services,
        #recommend,
        #testimonials,
        footer
        `,
      {
        opacity: 0,
        interval: 300,
      }
    );
  }, []);
  return (
    <>
      <ScrollTop />
      <Navbar />
      <Service />
      <Recommend />
      <Project />
      <Testimonials />
      <Footer />

    </>
  );
};

export default MainPage;
