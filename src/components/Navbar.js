import React, { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/Navbar.scss";

const gaEvent = (name, params = {}) => {
  if (!window.gtag) return;
  window.gtag("event", name, params);
};

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navVisible, setNavVisible] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen((v) => !v);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setNavVisible(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.querySelector(".projects-section");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const isMobile = () => window.innerWidth < 992;

  const handleWorkClick = (e) => {
    e.preventDefault();

    gaEvent("nav_click", {
      nav_item: "work",
      destination: "/",
      from: location.pathname,
    });

    setMenuOpen(false);

    // On mobile, skip the scroll-to-projects — content may not be rendered yet
    // and the scroll fires before the DOM is ready. Just go to the top of home.
    if (isMobile()) {
      if (location.pathname !== "/") {
        navigate("/");
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    // Desktop: scroll to projects as before
    if (location.pathname === "/") {
      scrollToProjects();
    } else {
      navigate("/", { state: { skipHeroAnimation: true } });
      setTimeout(scrollToProjects, 100);
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
        className={`custom-navbar ${navVisible ? "nav-visible" : ""} ${
          menuOpen ? "menu-open" : ""
        }`}
      >
        <div className="nav-container">
          <Navbar.Brand
            as={Link}
            to="/"
            className="brand-logo"
            onClick={handleLogoClick}
          >
            <img
              src="/starlogolight.svg"
              alt="logo"
              className="logo hover-subtle"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </Navbar.Brand>

          <div className="nav-links-desktop nav-bubble">
            <Nav className="nav-links">
              {renderAnimatedLink("work", "work", "/", handleWorkClick)}
              {renderAnimatedLink("about", "about", "/about", handleAboutClick)}

              <a
                href="/assets/Lana_Farkas_Resume_2026.pdf"
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

          <div className="menu-icon" onClick={toggleMenu}>
            {menuOpen ? <FiX /> : <FiMenu />}
          </div>
        </div>
      </Navbar>

      <div className={`nav-links-container ${menuOpen ? "active" : ""}`}>
        <Nav className="nav-links">
          {renderAnimatedLink("work", "work", "/", handleWorkClick)}
          {renderAnimatedLink("about", "about", "/about", handleAboutClick)}

          <a
            href="/assets/Lana_Farkas_Resume_2026.pdf"
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