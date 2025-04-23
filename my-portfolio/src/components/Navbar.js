import React, { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

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
      <div className="navbar-gradient" />

      <Navbar expand="lg" className="custom-navbar">
        <div className="nav-container">

          {/* Logo */}
          <Navbar.Brand href="/" className="brand-logo">
            <motion.img
              src="/starlogolight.svg"
              alt="logo"
              className="logo"
              initial={{ rotate: 0, scale: 1, filter: "brightness(1)" }}
              whileHover={{
                rotate: 3,
                scale: 1.1,
                filter: "brightness(1.1)",
              }}
              animate={{ rotate: 0, scale: 1, filter: "brightness(1)" }}
              transition={{ duration: 0.0000001, ease: "easeOut" }}
            />
          </Navbar.Brand>

          {/* Desktop Nav */}
          <div className="nav-links-desktop">
            <Nav className="nav-links">
              <Link to="/" className="nav-link">work</Link>
              <Link to="/about" className="nav-link">about</Link>
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

          {/* Hamburger (Mobile) */}
          <div className="menu-icon" onClick={toggleMenu}>
            {menuOpen ? <FiX /> : <FiMenu />}
          </div>

          {/* Mobile Nav Background */}
          <div className={`nav-background ${menuOpen ? "active" : ""}`}></div>

          {/* Mobile Dropdown Nav */}
          <div className={`nav-links-container ${menuOpen ? "active" : ""}`}>
            <Nav className="nav-links">
              <Link to="/" className="nav-link" onClick={toggleMenu}>work</Link>
              <Link to="/about" className="nav-link" onClick={toggleMenu}>about</Link>
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
        </div>
      </Navbar>
    </>
  );
};

export default Navigation;
