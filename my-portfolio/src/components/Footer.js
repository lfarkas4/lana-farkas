import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-gradient" />

      <div className="footer-content">
        {/* Left side: Icons THEN Message */}
        <div className="footer-left">
          <div className="footer-icons">
            <a
              href="https://www.linkedin.com/in/lana-farkas-66bb0a246"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon"
            >
              <img src="/assets/linkedin.svg" alt="LinkedIn" />
            </a>
            <a href="mailto:lfarkas@andrew.cmu.edu" className="footer-icon2">
              <img src="/assets/email.svg" alt="Email" />
            </a>
          </div>
          <span className="footer-message">happy to chat anytime ⟢</span>
        </div>

        {/* Right side: Credit */}
        <span className="footer-credit">
          designed and coded by lana farkas © {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
