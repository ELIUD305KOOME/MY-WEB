import React from 'react';
import './Footer.css'; // Make sure to create this CSS file

const Footer = () => {
    return (
        <footer id='contact' className="footer">
            <div className="footer-content">
                <p>Connect with Me:</p>
                <ul className="social-links">
                    <li>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook-f"></i> Facebook
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i> Twitter
                        </a>
                    </li>
                    <li>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i> Instagram
                        </a>
                    </li>
                    <li>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin-in"></i> LinkedIn
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github"></i> GitHub
                        </a>
                    </li>
                </ul>
            </div>
            <p className="footer-bottom">&copy; {new Date().getFullYear()} eliudkoome. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
