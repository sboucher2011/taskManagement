import React from "react";
import NavBar from "../../../components/DZL/navbar/NavBar";
import Hero from "../../../components/DZL/banner/Hero";
import Footer from "../../../components/DZL/footer/Footer";
import InfoBanner from "../../../components/DZL/promotions/InfoBanner";

const dzl = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <InfoBanner />
      {/* Reviews Bar */}
      {/* How it Works*/}
      {/* Contact Us */}
      <Footer />
    </>
  );
};

export default dzl;
