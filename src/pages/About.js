import React from "react";
import AboutTop from "../components/AboutTop";
import useShootingStar from "../utils/shootingstar";
import "../styles/Global.scss";
import { useResetScroll } from "../utils/useResetScroll";
import AboutStuff from "../components/AboutStuff";

const About = () => {
  useResetScroll();
  useShootingStar();
  return (
    <>
      <AboutTop />
      <AboutStuff />
    </>
  );
};

export default About;
