import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaReact, FaMobile, FaPython } from 'react-icons/fa';
import { SiSpringboot, SiMysql } from 'react-icons/si';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "VotiMate – E-voting System",
      description:
        "A mobile voting app with biometric (facial) authentication. Built with React Native, Spring Boot, Python (DeepFace), and MySQL.",
      image: "/images/logo.png",
      technologies: [
        "React Native",
        "Spring Boot",
        "Python",
        "MySQL",
        "DeepFace",
      ],
      category: "fullstack",
      github: "https://github.com/Ife0404",
      live: "#",
      features: [
        "Biometric facial authentication",
        "REST APIs for user registration and voting",
        "Admin dashboard and chatbot",
        "Real-time results display",
      ],
    },
    {
      id: 2,
      title: "E-commerce Web Application",
      description:
        "A responsive and interactive e-commerce frontend with product listing, cart functionality, and category management.",
      image: "/images/cart.png",
      technologies: ["React.js", "CSS3", "JavaScript"],
      category: "frontend",
      customClass: "ecommerce-project",
      github: "https://github.com/Ife0404",
      live: "https://e-commerce-two-tau-19.vercel.app/",
      features: [
        "Product listing and categories",
        "Shopping cart functionality",
        "Responsive design",
        "UI components for product display",
      ],
    },
    {
      id: 3,
      title: "Movie Discovery Platform",
      description:
        "A movie website interface showcasing trending and top-rated films with advanced filtering and pagination.",
      image: "/images/movie.png",
      technologies: ["React.js", "JavaScript", "CSS3"],
      category: "frontend",
      github: "https://github.com/Ife0404",
      live: "https://movie-gold-eta.vercel.app/",
      features: [
        "Movie browsing and search",
        "Trending and top-rated films",
        "Reusable components",
        "Responsive design",
      ],
    },
    {
      id: 4,
      title: "Web-based Voting Platform",
      description:
        "A web-based voting system for academic or organizational elections with candidate management and result display.",
      image: "/images/logo.png",
      technologies: ["React.js", "JavaScript", "CSS3"],
      category: "frontend",
      github: "https://github.com/Ife0404",
      live: "https://voting-platform-lilac.vercel.app/",
      features: [
        "User voting interface",
        "Candidate management",
        "Result display",
        "Admin controls",
      ],
    },
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'fullstack', label: 'Full Stack' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getTechnologyIcon = (tech) => {
    const iconMap = {
      'React.js': FaReact,
      'React Native': FaMobile,
      'Spring Boot': SiSpringboot,
      'MySQL': SiMysql,
      'Python': FaPython
    };
    return iconMap[tech] || FaReact;
  };

  const handleProjectClick = (project) => {
    if (project.live && project.live !== '#') {
      window.location.href = project.live;
    }
  };

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">Some of my recent work</p>
        </motion.div>

        <motion.div
          className="project-filters"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`project-card ${project.customClass || ''} ${project.live && project.live !== '#' ? 'clickable' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-img"
                  onError={(e) => {
                    e.target.onerror = null; // Prevent infinite loop if the image fails to load
                    e.target.src = '/images/logo.png'; // Fallback image
                  }}
                />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FaGithub />
                    </a>
                    <a 
                      href={project.live} 
                      className="project-link"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (project.live && project.live !== '#') {
                          e.preventDefault();
                          window.location.href = project.live;
                        }
                      }}
                    >
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-technologies">
                  <h4>Technologies:</h4>
                  <div className="tech-list">
                    {project.technologies.map((tech, techIndex) => {
                      const IconComponent = getTechnologyIcon(tech);
                      return (
                        <span key={techIndex} className="tech-item">
                          <IconComponent />
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* <motion.div
          className="projects-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <h3>Interested in working together?</h3>
          <p>Let's discuss your project and see how I can help bring your ideas to life.</p>
          <button className="cta-button">Get In Touch</button>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Projects; 