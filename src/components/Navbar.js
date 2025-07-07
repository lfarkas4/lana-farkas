import React, { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.scss";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

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

  const renderAnimatedLink = (label, pathId, route) => {
    const isActive = location.pathname === route;

    return (
      <Link
        to={route}
        className={`nav-link ${isActive ? "active" : ""}`}
        onClick={() => setMenuOpen(false)}
      >
        <span className="nav-link-wrapper">
          <span className="nav-link-label">{label}</span>

          {isActive && !menuOpen && (
  <svg
    className="nav-active-stroke"
    viewBox="0 0 180 100"
    preserveAspectRatio="none"
  >
    <path
      id={`nav-path-${pathId}`}
      className="nav-active-path"
      d="M29,38 a60,25 0 1,0 120,0 a60,25 0 1,0 -120,0"
    />
  </svg>
)}

{isActive && !menuOpen && (
  <img src="/assets/spark.svg" alt="sparkle" className="nav-sparkle" />
)}
        </span>
      </Link>
    );
  };

  return (
    <>
      <div className="navbar-gradient" />
      <div className={`nav-background ${menuOpen ? "active" : ""}`} />

      <Navbar
        expand="lg"
        expanded={menuOpen}
        className={`custom-navbar ${menuOpen ? "menu-open" : ""}`}
      >
        <div className="nav-container">
          {/* Logo */}
          <Navbar.Brand href="/" className="brand-logo">
          <img src="/starlogolight.svg" alt="logo" className="logo hover-subtle" />
          </Navbar.Brand>

          {/* Desktop Nav */}
          <div className="nav-links-desktop nav-bubble">
            <Nav className="nav-links">
              {renderAnimatedLink("work", "work", "/")}
              {renderAnimatedLink("about", "about", "/about")}
              <a
                href="/assets/lana_resume.pdf"
                className="nav-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="nav-link-wrapper">
                  <span className="nav-link-label">
                    resume <FiArrowUpRight className="resume-arrow" />
                  </span>
                </span>
              </a>
            </Nav>
          </div>

          {/* Hamburger Icon (inside nav-container for layering) */}
          <div className="menu-icon" onClick={toggleMenu}>
            {menuOpen ? <FiX /> : <FiMenu />}
          </div>
        </div>
      </Navbar>

      {/* Mobile Dropdown Nav */}
<div className={`nav-links-container ${menuOpen ? "active" : ""}`}>
  <Nav className="nav-links">
    {renderAnimatedLink("work", "work", "/")}
    {renderAnimatedLink("about", "about", "/about")}

    <a
      href="/assets/lana_resume.pdf"
      className="nav-link"
      target="_blank"
      rel="noopener noreferrer"
      onClick={toggleMenu}
    >
      <span className="nav-link-wrapper">
        <span className="nav-link-label">
          resume <FiArrowUpRight className="resume-arrow" />
        </span>
      </span>
    </a>
  </Nav>
</div>
    </>
  );
};

export default Navigation;
