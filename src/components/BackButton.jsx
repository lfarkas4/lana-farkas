import React from "react";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import "../styles/BackButton.scss";

const BackButton = () => {
  return (
    <Link to="/" className="back-bubble">
      <span className="back-arrow">
        <FiArrowUpRight />
      </span>
      <span className="back-label">back</span>
    </Link>
  );
};

export default BackButton;