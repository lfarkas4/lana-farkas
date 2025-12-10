import React, { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/Navbar.scss";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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

  // Scroll to projects section
  const scrollToProjects = () => {
    const projectsSection = document.querySelector('.projects-section');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Handle "Work" link click
  const handleWorkClick = (e) => {
    e.preventDefault();
    setMenuOpen(false);
  
    if (location.pathname === '/') {
      // Already on homepage, just scroll
      scrollToProjects();
    } else {
      // Navigate to homepage with flag to skip hero animations
      navigate('/', { state: { skipHeroAnimation: true } });
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        scrollToProjects();
      }, 100);
    }
  };

  const renderAnimatedLink = (label, pathId, route, onClick) => {
    const isActive = location.pathname === route;

    return (
      <Link
        to={route}
        className={`nav-link ${isActive ? "active" : ""}`}
        onClick={onClick || (() => setMenuOpen(false))}
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
          {/* Logo - Always goes to top of homepage */}
          <Navbar.Brand 
            as={Link} 
            to="/" 
            className="brand-logo"
            onClick={() => {
              setMenuOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <img src="/starlogolight.svg" alt="logo" className="logo hover-subtle" />
          </Navbar.Brand>

          {/* Desktop Nav */}
          <div className="nav-links-desktop nav-bubble">
            <Nav className="nav-links">
              {renderAnimatedLink("work", "work", "/", handleWorkClick)}
              {renderAnimatedLink("about", "about", "/about")}
              <a
                href="/assets/Lana_Farkas_Resume_2025.pdf"
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

          {/* Hamburger Icon */}
          <div className="menu-icon" onClick={toggleMenu}>
            {menuOpen ? <FiX /> : <FiMenu />}
          </div>
        </div>
      </Navbar>

      {/* Mobile Dropdown Nav */}
      <div className={`nav-links-container ${menuOpen ? "active" : ""}`}>
        <Nav className="nav-links">
          {renderAnimatedLink("work", "work", "/", handleWorkClick)}
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