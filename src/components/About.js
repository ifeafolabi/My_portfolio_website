import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaMapMarkerAlt, FaEnvelope, FaPhone, FaGithub } from 'react-icons/fa';
import './About.css';

const About = () => {
  const personalInfo = [
    { icon: FaEnvelope, label: 'Email', value: 'ifepraise2004@gmail.com' },
    { icon: FaPhone, label: 'Phone', value: '07082780906, 09134136130' },
    { icon: FaGithub, label: 'GitHub', value: 'github.com/Ife0404' },
    { icon: FaGraduationCap, label: 'Education', value: 'BSc Computer Science - Bowen University' },
    { icon: FaMapMarkerAlt, label: 'Location', value: 'Nigeria' }
  ];

  return (
    <section id="about" className="about">
      <div className="about-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know me better</p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>Who I Am</h3>
            <p>
              I'm Afolabi Praise Ifekristi, a passionate and highly motivated Computer Science student with strong proficiency in modern web and mobile development technologies. I'm currently pursuing my BSc in Computer Science at Bowen University, Nigeria, with graduation expected in July 2025.
            </p>
            
            <p>
              I specialize in frontend and full-stack development, with expertise in JavaScript, React, React Native, and Spring Boot. My passion lies in building accessible and performance-optimized mobile and web applications that solve real-world problems.
            </p>

            <p>
              I'm actively seeking a frontend or full-stack developer role where I can apply my skills while gaining valuable industry experience. I'm open to remote and hybrid work opportunities and always excited to work on challenging projects.
            </p>

            <div className="about-highlights">
              <div className="highlight">
                <span className="highlight-number">2+</span>
                <span className="highlight-text">Years of Experience</span>
              </div>
              <div className="highlight">
                <span className="highlight-number">10+</span>
                <span className="highlight-text">Projects Completed</span>
              </div>
              <div className="highlight">
                <span className="highlight-number">3+</span>
                <span className="highlight-text">Technologies Mastered</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-info"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3>Personal Information</h3>
            <div className="info-grid">
              {personalInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  className="info-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="info-icon">
                    <info.icon />
                  </div>
                  <div className="info-content">
                    <span className="info-label">{info.label}</span>
                    <span className="info-value">{info.value}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="certifications">
              <h4>Certifications & Training</h4>
              <ul>
                <li>Java Spring Boot – Udemy</li>
                <li>Frontend Development – YouTube/Codecademy</li>
                <li>Figma UI Design - YouTube</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 