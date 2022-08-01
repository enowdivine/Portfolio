import React from "react";
import NavigationBar from "../../components/navbar/Navbar";
import HomeSection from "../../components/home_section/HomeSection";
import About from "../../components/about_me/About";
import Work from "../../components/work/Work";
import Projects from "../../components/projects/Projects";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div>
      <div>
        <NavigationBar />
      </div>
      <div>
        <HomeSection />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Work />
      </div>
      <div>
        <Projects />
      </div>
      <div>
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
