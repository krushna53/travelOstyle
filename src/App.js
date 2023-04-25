import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import "./css/aos.css";
import { Routes, Route } from "react-router-dom";
import TourcardDetails from "./Pages/TourcardDetails";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import BasicPage from "./Pages/BasicPage";
import Footer from "./Components/Footer";

function App() {
  const location = useLocation();
  const activeSlug = location.pathname.split('/').pop(); // Get the last part of the URL path
  useEffect(() => {
    document.body.classList.add(`page-${activeSlug}`); // Add the class to the body tag
    return () => {
      document.body.classList.remove(`page-${activeSlug}`); // Remove the class from the body tag when the component unmounts
    };
  }, [activeSlug]);
  return (
    <>

      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path='/basicpage/:slug' element={<BasicPage />}></Route>
        <Route path="/tour-details/:slug" element={<TourcardDetails />} />
      </Routes>
      <Footer />

    </>
  );
}

export default App;