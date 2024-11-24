import React from "react";
import "./Footer.css"; // Assuming your styles are in Footer.css

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer-link">
          GitHub
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-link">
          LinkedIn
        </a>
        <a href="https://codeforces.com" target="_blank" rel="noopener noreferrer" className="footer-link">
          Codeforces
        </a>
      </div>
      <div className="footer-text">
        <p>© 2023 Your Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
