import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-gradient" />

      <div className="footer-content">
        <div className="footer-left">
          <a href="https://www.linkedin.com/in/lana-farkas-66bb0a246" target="_blank" rel="noopener noreferrer" className="footer-icon">
            <img src="/assets/linkedin.svg" alt="LinkedIn" />
          </a>
          <a href="mailto:lfarkas@andrew.cmu.edu" className="footer-icon2">
            <img src="/assets/email.svg" alt="Email" />
          </a>
          <span className="footer-message">happy to chat anytime ⟢</span>
        </div>

        <div className="footer-right">
          <span className="footer-credit">
            designed and developed by lana farkas © {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
