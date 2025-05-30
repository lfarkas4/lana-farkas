import React from "react";
import AboutTop from "../components/AboutTop";
import AboutExtras from "../components/AboutExtras";
import useShootingStar from "../utils/shootingstar";
import "../styles/Global.css";
import { useResetScroll } from "../utils/useResetScroll";
import AboutCards from "../components/AboutCards";

const About = () => {
  useResetScroll();
  useShootingStar();
  return (
    <>
      <AboutTop />
      <AboutCards />
    </>
  );
};

export default About;
