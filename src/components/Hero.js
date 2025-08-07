import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Ife0404',
      icon: FaGithub,
      color: '#333'
    },
    {
      name: 'LinkedIn',
      url: '#',
      icon: FaLinkedin,
      color: '#0077b5'
    },

    {
      name: 'Email',
      url: 'mailto:ifepraise2004@gmail.com',
      icon: FaEnvelope,
      color: '#ea4335'
    }
  ];

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Software Engineer & Full-Stack Developer
            </motion.h1>
            
            <motion.p
              className="hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              I'm Afolabi Praise Ifekristi, a passionate Computer Science student with strong proficiency in modern web and mobile development technologies. Seeking a frontend or full-stack developer role to apply my skills in JavaScript, React, React Native, and Spring Boot while gaining industry experience.
            </motion.p>

            <motion.div
              className="hero-cta"
              href="#projects"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a href="#projects" className="cta-primary">View My Work</a>
              <a 
                href="/resume/AFOLABI PRAISE IFEKRISTI.pdf" 
                className="cta-secondary"
                download="AFOLABI PRAISE IFEKRISTI.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDownload style={{ marginRight: '8px' }} />
                Download Resume
              </a>
            </motion.div>

            <motion.div
              className="social-links"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 1 + index * 0.1 }}
                >
                  <link.icon />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-image"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="profile-photo-container">
              <img 
                src="/images/mainprofile.jpg" 
                alt="Afolabi Praise Ifekristi" 
                className="profile-photo"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
                             <div className="profile-photo-placeholder" style={{ display: 'none' }}>
                 <div className="photo-text">Add Your Photo Here</div>
                 <div className="photo-instructions">
                   Replace this placeholder with your actual photo
                 </div>
               </div>
              <div className="photo-border"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 