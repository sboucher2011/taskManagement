import React from "react";
import { NavBar } from "../../../components/DZL/navbar/NavBar";
import Hero from "../../../components/DZL/banner/Hero";
import Footer from "../../../components/DZL/footer/Footer";
import Promotions from "../../../components/DZL/promotions/Promotions";
import About from "../../../components/DZL/About/About";
import Contact from "../../../components/DZL/Contact/Contact";

const dzl = () => {
  const handleClickScroll = (location: string) => {
    const soltuion = document.getElementById("solutions");
    const contactUs = document.getElementById("contact-us");
    if (location === "Solutions") {
      soltuion!.scrollIntoView({ behavior: "smooth" });
    } else if (location === "Contact Us") {
      contactUs!.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <NavBar onClick={handleClickScroll} />
      <Hero />
      <Promotions />
      <div id="solutions">
        <About />
      </div>
      <div id="contact-us">
        <Contact />
      </div>
      {/* Reviews Bar */}
      {/* Contact Us */}
      <Footer />
    </>
  );
};

export default dzl;
