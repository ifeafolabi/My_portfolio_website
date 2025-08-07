import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: "Full-Stack Developer Intern",
      company: "Ecobank Software Centre, eProcess Nigeria.",
      period: "July 2024 – September 2024",
      location: "Nigeria",
      description: [
        "Designed user-friendly web interfaces, enhancing user satisfaction.",
        "Restful API Integration using Spring Boot.",
        "Developed mobile applications using React Native.",
        "Built robust backend services, improving data security and integrity.",
      ],
      technologies: [
        "React Native",
        "Spring Boot",
        "RESTful APIs",
        "Backend Development",
      ],
    },
    {
      title: "Frontend Developer Intern",
      company: "Ecobank Software Centre, eProcess Nigeria.",
      period: "July 2023 – September 2023",
      location: "Nigeria",
      description: [
        "Designed user-friendly web interfaces, enhancing user satisfaction.",
        "Collaborated with UX and UI designers to implement design changes.",
        "Improved site performance using advanced React.js techniques.",
        "Conducted testing and debugging to enhance application performance.",
      ],
      technologies: [
        "React.js",
        "UI/UX Design",
        "Performance Optimization",
        "Testing & Debugging",
      ],
    },
  ];

  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">My professional journey</p>
        </motion.div>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="experience-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="experience-content">
                <div className="experience-header">
                  <div className="experience-icon">
                    <FaBriefcase />
                  </div>
                  <div className="experience-info">
                    <h3 className="experience-title">{exp.title}</h3>
                    <div className="experience-meta">
                      <span className="company-name">{exp.company}</span>
                      <div className="experience-details">
                        <span className="period">
                          <FaCalendarAlt />
                          {exp.period}
                        </span>
                        <span className="location">
                          <FaMapMarkerAlt />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="experience-description">
                  <ul>
                    {exp.description.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.2 + itemIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="experience-technologies">
                  <h4>Technologies Used:</h4>
                  <div className="tech-tags">
                    {exp.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="tech-tag"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.2 + techIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>


            </motion.div>
          ))}
        </div>

        <motion.div
          className="experience-summary"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <h3>Career Highlights</h3>
          <div className="highlights-grid">
            <div className="highlight-item">
              <span className="highlight-number">2</span>
              <span className="highlight-text">Internships Completed</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-number">6+</span>
              <span className="highlight-text">Months Experience</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-number">4+</span>
              <span className="highlight-text">Technologies Mastered</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-number">100%</span>
              <span className="highlight-text">Client Satisfaction</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 