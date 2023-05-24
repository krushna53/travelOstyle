import React from "react";
import TourCard from "../Components/TourCard";
import About from "../Components/About";
import ContactUs from "../Components/ContactUs";
import BannerNew from "../Components/BannerNew";

const Home = () => {
  return (
    <>
      <BannerNew />
   
      <TourCard />
      <About />
      <ContactUs />
    </>
  );
};

export default Home;
