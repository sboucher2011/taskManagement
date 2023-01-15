import React from "react";
import NavBar from "../../../components/DZL/navbar/NavBar";
import Hero from "../../../components/DZL/banner/Hero";
import Footer from "../../../components/DZL/footer/Footer";
import InfoBanner from "../../../components/DZL/promotions/InfoBanner";
import Promotions from "../../../components/DZL/promotions/Promotions";
import About from "../../../components/DZL/About/About";
import Contact from "../../../components/DZL/Contact/Contact";

const dzl = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Promotions />
      <About />
      <Contact />
      {/* Reviews Bar */}
      {/* Contact Us */}
      <Footer />
    </>
  );
};

export default dzl;
