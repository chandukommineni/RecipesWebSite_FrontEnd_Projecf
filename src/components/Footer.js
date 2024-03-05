import React from 'react';
import './Footer.css'; // Import your CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-footer">
        <div className="footer-content">
          <div className="footer-logo">
            <h1>MyF<span>oo</span>dRecipe</h1>
          </div>
          <div className="footer-social">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="footer-copyright">
          &copy; {new Date().getFullYear()} Recipe Website. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
