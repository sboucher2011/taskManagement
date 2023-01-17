import axios from "axios";
import React, { useEffect } from "react";
import Sidebar from "../../../components/TM/SideBar/Sidebar";

const Dashboard = () => {
  useEffect(() => {
    axios
      .get("/api/todo")
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

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
      <Sidebar />
    </>
  );
};

export default Dashboard;
