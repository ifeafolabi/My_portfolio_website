import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/Ife0404',
      color: '#333'
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: '#',
      color: '#0077b5'
    },
    {
      name: 'Twitter',
      icon: FaTwitter,
      url: '#',
      color: '#1da1f2'
    }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="footer-section">
            <h3 className="footer-logo">AFOLABI</h3>
            <p className="footer-description">
              A passionate Computer Science student and full-stack developer focused on creating innovative web and mobile applications.
            </p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="footer-contact">
              <p>Email: ifepraise2004@gmail.com</p>
              <p>Phone: 07082780906</p>
              <p>Location: Nigeria</p>
            </div>
          </div>

          <div className="footer-section">
            <h4>Follow Me</h4>
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  style={{ color: social.color }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.2, y: -2 }}
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="footer-divider"></div>
          <div className="footer-copyright">
            <p>
              © {currentYear} Afolabi Praise Ifekristi. All rights reserved.
            </p>
            <p className="footer-made-with">
              Made with <FaHeart className="heart-icon" /> using React
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 