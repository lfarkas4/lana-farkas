import React from "react";
import AboutTop from "../components/AboutTop";
import AboutExtras from "../components/AboutExtras";
import useShootingStar from "../utils/shootingstar";
import "../styles/Global.css";

const About = () => {
  useShootingStar();
  return (
    <>
      <AboutTop />
      <AboutExtras />
    </>
  );
};

export default About;
