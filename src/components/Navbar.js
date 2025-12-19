import React, { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/Navbar.scss";

// --- GA helper ---
const gaEvent = (name, params = {}) => {
  if (!window.gtag) return;
  window.gtag("event", name, params);
};

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Scroll to projects section
  const scrollToProjects = () => {
    const projectsSection = document.querySelector(".projects-section");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Handle "Work" link click
  const handleWorkClick = (e) => {
    e.preventDefault();

    gaEvent("nav_click", {
      nav_item: "work",
      destination: "/",
      from: location.pathname,
    });

    setMenuOpen(false);

    if (location.pathname === "/") {
      scrollToProjects();
    } else {
      navigate("/", { state: { skipHeroAnimation: true } });
      setTimeout(() => {
        scrollToProjects();
      }, 100);
    }
  };

  const handleAboutClick = () => {
    gaEvent("nav_click", {
      nav_item: "about",
      destination: "/about",
      from: location.pathname,
    });
    setMenuOpen(false);
  };

  const handleResumeClick = () => {
    gaEvent("nav_click", {
      nav_item: "resume",
      destination: "resume_pdf",
      from: location.pathname,
    });
    setMenuOpen(false);
  };

  const handleLogoClick = () => {
    gaEvent("nav_click", {
      nav_item: "logo",
      destination: "/",
      from: location.pathname,
    });
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
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
            <svg className="nav-active-stroke" viewBox="0 0 180 100" preserveAspectRatio="none">
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

      <Navbar expand="lg" expanded={menuOpen} className={`custom-navbar ${menuOpen ? "menu-open" : ""}`}>
        <div className="nav-container">
          {/* Logo - Always goes to top of homepage */}
          <Navbar.Brand as={Link} to="/" className="brand-logo" onClick={handleLogoClick}>
            <img src="/starlogolight.svg" alt="logo" className="logo hover-subtle" />
          </Navbar.Brand>

          {/* Desktop Nav */}
          <div className="nav-links-desktop nav-bubble">
            <Nav className="nav-links">
              {renderAnimatedLink("work", "work", "/", handleWorkClick)}
              {renderAnimatedLink("about", "about", "/about", handleAboutClick)}

              <a
                href="/assets/Lana_Farkas_Resume_2025.pdf"
                className="nav-link"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleResumeClick}
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
          {renderAnimatedLink("about", "about", "/about", handleAboutClick)}

          <a
            href="/assets/lana_resume.pdf"
            className="nav-link"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleResumeClick}
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
