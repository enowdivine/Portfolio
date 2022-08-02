import React from "react";
import "./Home.css";
import NavigationBar from "../../components/navbar/Navbar";
import HomeSection from "../../components/home_section/HomeSection";
import About from "../../components/about_me/About";
import Work from "../../components/work/Work";
import Projects from "../../components/projects/Projects";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";
import OtherProjects from "../../components/other_projects/OtherProjects";
import { useState } from "react";

const Home = () => {
  const [projects] = useState([1, 2, 3, 4, 5, 6]);
  return (
    <div className="container">
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
        <div className="section-title">Other Noteworthy Projects</div>
        <div className="otherProjects">
          {projects.map((_, index) => (
            <OtherProjects />
          ))}
        </div>
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
