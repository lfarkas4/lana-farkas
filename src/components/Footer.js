import React from "react";
import "../styles/Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-gradient" />

      <div className="footer-main">
        <div className="footer-line">
          {/* LEFT BLOCK */}
          <div className="footer-salutation">
            <div className="footer-thanks font-cooper-italic-tag2">
              thanks for stopping by ✧˖°.
            </div>
            <div className="footer-travels footer-travels-wrapper">
              safe travels across the digital cosmos!
            </div>
          </div>

          {/* RIGHT BLOCK */}
          <div className="footer-contact">
            <div className="footer-icons">
              <a href="https://www.linkedin.com/in/lana-farkas-66bb0a246" target="_blank" rel="noopener noreferrer">
                <img src="/assets/linkedin.svg" alt="LinkedIn" />
              </a>
              <a href="mailto:lfarkas@andrew.cmu.edu">
                <img src="/assets/email.svg" alt="Email" />
              </a>
              <a href="https://github.com/lfarkas4" target="_blank" rel="noopener noreferrer">
                <img src="/assets/git.svg" alt="GitHub" />
              </a>
            </div>
            <div className="footer-message">
              happy to chat anytime ⟢
            </div>
          </div>
        </div>
      </div>

      <div className="footer-credit">
        built with ♥ & code © {new Date().getFullYear()} Lana Farkas.
      </div>
    </footer>
  );
};

export default Footer;
