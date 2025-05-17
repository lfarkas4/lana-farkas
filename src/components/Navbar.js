import React, { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close menu on window resize above breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Mobile background overlay */}
      <div className={`nav-background ${menuOpen ? "active" : ""}`} />

      <Navbar expand="lg" className="custom-navbar">
        <div className="nav-container">

          {/* Logo on the left */}
          <Navbar.Brand href="/" className="brand-logo">
            <motion.img
              src="/starlogolight.svg"
              alt="logo"
              className="logo"
              initial={{ rotate: 0, scale: 1, filter: "brightness(1)" }}
              whileHover={{
                rotate: -2,
                scale: 1.1,
                filter: "brightness(1.4)",
              }}
              animate={{ rotate: 0, scale: 1, filter: "brightness(1)" }}
              transition={{ duration: 0.0000000001, ease: "easeOut" }}
            />
          </Navbar.Brand>

          {/* Desktop frosted nav capsule */}
          <div className="nav-bubble">
            <Nav className="nav-links">
              <Link
                to="/"
                className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
              >
                work
              </Link>

              <Link
                to="/about"
                className={`nav-link ${location.pathname === "/about" ? "active" : ""}`}
              >
                about
              </Link>

              <a
                href="/assets/lana_resume.pdf"
                className="nav-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                resume <FiArrowUpRight className="resume-arrow" />
              </a>
            </Nav>
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="menu-icon" onClick={toggleMenu}>
            {menuOpen ? <FiX /> : <FiMenu />}
          </div>
        </div>
      </Navbar>

      {/* Mobile Dropdown Nav */}
      <div className={`nav-links-container ${menuOpen ? "active" : ""}`}>
        <Nav className="nav-links">
          <Link
            to="/"
            className="nav-link"
            onClick={toggleMenu}
          >
            work
          </Link>
          <Link
            to="/about"
            className="nav-link"
            onClick={toggleMenu}
          >
            about
          </Link>
          <a
            href="/assets/lana_resume.pdf"
            className="nav-link"
            target="_blank"
            rel="noopener noreferrer"
            onClick={toggleMenu}
          >
            resume <FiArrowUpRight className="resume-arrow" />
          </a>
        </Nav>
      </div>
    </>
  );
};

export default Navigation;
