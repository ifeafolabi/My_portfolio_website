import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaMobile, FaDatabase, FaGitAlt, FaJava } from 'react-icons/fa';
import { SiSpringboot, SiPostman, SiTailwindcss } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
    { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
    { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
    { name: 'React.js', icon: FaReact, color: '#61DAFB' },
    { name: 'React Native', icon: FaMobile, color: '#61DAFB' },
    { name: 'TailwindCSS', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
    { name: 'Java', icon: FaJava, color: '#ED8B00' },
    { name: 'MySQL', icon: FaDatabase, color: '#4479A1' },
    { name: 'Git & GitHub', icon: FaGitAlt, color: '#F05032' },
    { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
    { name: 'JWT', icon: FaDatabase, color: '#000000' }
  ];

  // Group skills into categories for better organization
  const categories = [
    {
      name: 'Frontend',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'TailwindCSS']
    },
    {
      name: 'Mobile',
      skills: ['React Native']
    },
    {
      name: 'Backend',
      skills: ['Spring Boot', 'Java']
    },
    {
      name: 'Tools',
      skills: ['MySQL', 'Git & GitHub', 'Postman', 'JWT']
    }
  ];

  // Calculate the maximum number of skills in any category
  const maxSkills = Math.max(...categories.map(cat => cat.skills.length));
  
  // Function to fill empty spaces to maintain consistent grid
  const fillEmptySpaces = (skills, max) => {
    const emptyCount = max - skills.length;
    return [...skills, ...Array(emptyCount).fill(null)];
  };

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
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category}
              className="skill-category"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="category-title">{category.name}</h3>
              <div className={`skills-grid ${category.name === 'Frontend' ? 'frontend-grid' : ''}`}>
                {fillEmptySpaces(
                  skills.filter(skill => category.skills.includes(skill.name)),
                  maxSkills
                ).map((skill, skillIndex) => {
                  if (!skill) {
                    return (
                      <div 
                        key={`empty-${categoryIndex}-${skillIndex}`} 
                        className="skill-item empty" 
                      />
                    );
                  }
                  return (
                    <motion.div
                      key={skill.name}
                      className="skill-item"
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(0,0,0,0.2)' }}
                      transition={{ 
                        type: 'spring',
                        stiffness: 400,
                        damping: 10,
                        delay: skillIndex * 0.05
                      }}
                      viewport={{ once: true }}
                    >
                      <div className="skill-icon" style={{ color: skill.color }}>
                        <skill.icon />
                      </div>
                      <span className="skill-name">{skill.name}</span>
                    </motion.div>
                  );
                })}
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