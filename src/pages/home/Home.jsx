import React from "react";
import NavigationBar from "../../components/navbar/Navbar";
import HomeSection from "../../components/home_section/HomeSection";
import About from "../../components/about_me/About";
import Work from "../../components/work/Work";

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
    </div>
  );
};

export default Home;
