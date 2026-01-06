import { useState } from 'react';
import '../styles/portfolio.css';
import project1 from '../assets/Project-weddingtree.jpg';
import project2 from '../assets/Project-portfoliowebsite.jpg';

const projectsData = [
  {
    img: project1,
    title: 'The Wedding Tree',
    short: 'A full-stack event management platform.',
    problem: 'Manual event inquiries and poor user experience.',
    solution: 'Built a scalable platform with responsive UI and automation.',
    impact: 'Improved engagement and production-ready architecture.',
    tech: ['React', 'Django', 'PostgreSQL'],
    live: '#',
    github: '#',
  },
  {
    img: project2,
    title: 'Personal Portfolio',
    short: 'A modern developer portfolio website.',
    problem: 'Lack of professional online presence.',
    solution: 'Designed a clean portfolio using React and Spring Boot.',
    impact: 'Clear showcase of skills and recruiter readiness.',
    tech: ['React', 'Spring Boot', 'Oracle'],
    live: '#',
    github: '#',
  },
];

function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="portfolio" className="portfolio">
      <h2>
        My <span>Projects</span>
      </h2>

      <div className="portfolio-split">
        {projectsData.map((project, index) => {
          const expanded = activeIndex === index;

          return (
            <div key={index} className="split-card">
              {/* Image */}
              <div className="split-image">
                <img src={project.img} alt={project.title} />
              </div>

              {/* Content */}
              <div className="split-content">
                <span className="case-tag">Case Study</span>

                <h3>{project.title}</h3>
                <p className="short-desc">{project.short}</p>

                <div
                  className={`case-details ${
                    expanded ? 'expanded' : ''
                  }`}
                >
                  <p><strong>Problem:</strong> {project.problem}</p>
                  <p><strong>Solution:</strong> {project.solution}</p>
                  <p><strong>Impact:</strong> {project.impact}</p>
                </div>

                <div className="tech-badges">
                  {project.tech.map((t, i) => (
                    <span key={i}>{t}</span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="project-actions">
                  <a href={project.live} target="_blank" rel="noreferrer">
                    Live Project
                  </a>
                  <a href={project.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                </div>

                {/* Mobile only */}
                <button
                  className="read-more-btn mobile-only"
                  onClick={() => toggle(index)}
                >
                  {expanded ? 'Show Less' : 'Read More'}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
