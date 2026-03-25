import React, { useEffect, useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import { useRouter } from "next/router";

const gaEvent = (name, params = {}) => {
  if (typeof window === "undefined") return;
  if (!window.gtag) return;
  window.gtag("event", name, params);
};

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  // On return visits this session, show navbar immediately — no fade-in flash
  const isReturn = typeof window !== "undefined" && sessionStorage.getItem("heroSeen");
  const [navVisible, setNavVisible] = useState(!!isReturn);

  const router = useRouter();

  const toggleMenu = () => setMenuOpen((v) => !v);

  useEffect(() => {
    if (isReturn) return; // already visible
    const raf = requestAnimationFrame(() => setNavVisible(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined" && window.innerWidth > 992) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToProjects = () => {
    if (typeof window === "undefined") return;
    const projectsSection = document.querySelector(".projects-section");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const isMobile = () => (typeof window !== "undefined" ? window.innerWidth < 992 : false);

  const handleWorkClick = async (e) => {
    e.preventDefault();

    gaEvent("nav_click", {
      nav_item: "work",
      destination: "/",
      from: router.pathname,
    });

    setMenuOpen(false);

    // Mobile: just go home/top (avoid scrolling before DOM exists)
    if (isMobile()) {
      if (router.pathname !== "/") {
        await router.push("/");
      } else if (typeof window !== "undefined") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    // Desktop: scroll to projects if on home; otherwise go home then scroll
    if (router.pathname === "/") {
      scrollToProjects();
    } else {
      await router.push("/");
      setTimeout(scrollToProjects, 100);
    }
  };

  const handleAboutClick = () => {
    gaEvent("nav_click", {
      nav_item: "about",
      destination: "/about",
      from: router.pathname,
    });
    setMenuOpen(false);
  };

  const handleResumeClick = () => {
    gaEvent("nav_click", {
      nav_item: "resume",
      destination: "resume_pdf",
      from: router.pathname,
    });
    setMenuOpen(false);
  };

  const handleLogoClick = () => {
    gaEvent("nav_click", {
      nav_item: "logo",
      destination: "/",
      from: router.pathname,
    });
    setMenuOpen(false);
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderAnimatedLink = (label, pathId, route, onClick) => {
    const isActive = router.pathname === route;
    const isDesktop = typeof window !== "undefined" && window.innerWidth > 992;

    return (
      <Link
        href={route}
        className={`nav-link ${isActive ? "active" : ""}`}
        onClick={onClick || (() => setMenuOpen(false))}
      >
        <span className="nav-link-wrapper">
          <span className="nav-link-label">{label}</span>

          {/* Active stroke + spark — desktop only, never in mobile menu */}
          {isActive && !menuOpen && isDesktop && (
            <svg className="nav-active-stroke" viewBox="0 0 180 100" preserveAspectRatio="none">
              <path
                id={`nav-path-${pathId}`}
                className="nav-active-path"
                d="M29,38 a60,25 0 1,0 120,0 a60,25 0 1,0 -120,0"
              />
            </svg>
          )}

          {isActive && !menuOpen && isDesktop && (
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
        className={`custom-navbar ${navVisible ? "nav-visible" : ""} ${menuOpen ? "menu-open" : ""}`}
      >
        <div className="nav-container">
          <Navbar.Brand className="brand-logo" onClick={handleLogoClick}>
            <Link href="/" className="brand-logo">
              <img
                src="/starlogolight.svg"
                alt="logo"
                className="logo hover-subtle"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </Link>
          </Navbar.Brand>

          <div className="nav-links-desktop nav-bubble">
            <Nav className="nav-links">
              {renderAnimatedLink("work", "work", "/", handleWorkClick)}
              {renderAnimatedLink("about", "about", "/about", handleAboutClick)}

              <a
                href="/assets/LanaFarkas_Resume.pdf"
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

          <div className="menu-icon" onClick={toggleMenu} role="button" tabIndex={0} aria-label="Toggle menu">
            {menuOpen ? <FiX /> : <FiMenu />}
          </div>
        </div>
      </Navbar>

      <div className={`nav-links-container ${menuOpen ? "active" : ""}`}>
        <Nav className="nav-links">
          {renderAnimatedLink("work", "work", "/", handleWorkClick)}
          {renderAnimatedLink("about", "about", "/about", handleAboutClick)}

          <a
            href="/assets/LanaFarkas_Resume.pdf"
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
}