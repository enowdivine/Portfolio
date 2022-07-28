import React from "react";
import NavigationBar from "../../components/navbar/Navbar";
import HomeSection from "../../components/home_section/HomeSection";

const Home = () => {
  return (
    <div>
      <div>
        <NavigationBar />
      </div>
      <div>
        <HomeSection />
      </div>
    </div>
  );
};

export default Home;
