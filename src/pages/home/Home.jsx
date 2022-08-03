import React from "react";
import "./Home.css";
import NavigationBar from "../../components/navbar/Navbar";
import HomeSection from "../../components/home_section/HomeSection";
import About from "../../components/about_me/About";
import Work from "../../components/work/Work";
import Projects from "../../components/projects/Projects";
import ProjectsTwo from "../../components/projectsTwo/ProjectsTwo";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";
import OtherProjects from "../../components/other_projects/OtherProjects";
import { useState } from "react";

const Home = () => {
  const [otherProjects] = useState([1, 2, 3, 4, 5, 6]);
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
      <div className="all-projects">
        <div className="heading">
          <span>03. </span>
          <h5>Some Things I've Built</h5>
        </div>
        <div>
          <Projects />
        </div>
        <div>
          <ProjectsTwo />
        </div>
        <div>
          <Projects />
        </div>
      </div>
      <div>
        <div className="section-title">Other Noteworthy Projects</div>
        <div className="otherProjects">
          {otherProjects.map((_, index) => (
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
