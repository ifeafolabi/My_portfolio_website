import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaMobile, FaDatabase, FaGitAlt, FaJava } from 'react-icons/fa';
import { SiSpringboot, SiPostman, SiTailwindcss } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'HTML5', icon: FaHtml5, level: 90, color: '#E34F26' },
        { name: 'CSS3', icon: FaCss3Alt, level: 85, color: '#1572B6' },
        { name: 'JavaScript', icon: FaJs, level: 88, color: '#F7DF1E' },
        { name: 'React.js', icon: FaReact, level: 85, color: '#61DAFB' },
        { name: 'TailwindCSS', icon: SiTailwindcss, level: 80, color: '#06B6D4' }
      ]
    },
    {
      category: 'Mobile Development',
      skills: [
        { name: 'React Native', icon: FaMobile, level: 82, color: '#61DAFB' }
      ]
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Spring Boot', icon: SiSpringboot, level: 75, color: '#6DB33F' },
        { name: 'Java', icon: FaJava, level: 78, color: '#ED8B00' }
      ]
    },
    {
      category: 'Database & Tools',
      skills: [
        { name: 'MySQL', icon: FaDatabase, level: 80, color: '#4479A1' },
        { name: 'Git & GitHub', icon: FaGitAlt, level: 85, color: '#F05032' },
        { name: 'Postman', icon: SiPostman, level: 75, color: '#FF6C37' },
        { name: 'JWT', icon: FaDatabase, level: 70, color: '#000000' }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">Technologies I work with</p>
        </motion.div>

        <div className="skills-content">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              className="skill-category"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="skill-header">
                      <div className="skill-icon" style={{ color: skill.color }}>
                        <skill.icon />
                      </div>
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-level">{skill.level}%</span>
                      </div>
                    </div>
                    <div className="skill-progress">
                      <motion.div
                        className="skill-progress-bar"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3 }}
                        viewport={{ once: true }}
                        style={{ backgroundColor: skill.color }}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="skills-summary"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <h3>Additional Skills</h3>
          <div className="additional-skills">
            <div className="skill-tag">Problem Solving</div>
            <div className="skill-tag">Analytical Skills</div>
            <div className="skill-tag">UI/UX Design</div>
            <div className="skill-tag">API Integration</div>
            <div className="skill-tag">Responsive Design</div>
            <div className="skill-tag">Performance Optimization</div>
            <div className="skill-tag">Version Control</div>
            <div className="skill-tag">Testing & Debugging</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 