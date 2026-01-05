import '../styles/portfolio.css';
import project1 from '../assets/Project-weddingtree.jpg';
import project2 from '../assets/Project-portfoliowebsite.jpg';

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <h2>
        My <span>Projects</span>
      </h2>

      <div className="portfolio-grid">

        {/* Project 1 */}
        <div className="project-card modern">
          <div className="project-img">
            <img src={project1} alt="The Wedding Tree Project" />
          </div>

          <div className="project-content">
            <span className="project-tag">Case Study</span>

            <h3>The Wedding Tree</h3>

            <div className="project-story">
              <p><strong>Problem:</strong> Manual event inquiries and poor user experience for clients.</p>
              <p><strong>Solution:</strong> Built a full-stack event management platform with responsive UI and automated contact handling.</p>
              <p><strong>Impact:</strong> Improved engagement and created a scalable, production-ready system.</p>
            </div>

            <div className="project-tech-badges">
              <span>React</span>
              <span>Django</span>
              <span>PostgreSQL</span>
            </div>

            <div className="project-links">
              <a href="https://theweddingtree.vercel.app" className="primary">Live Demo</a>
              <a href="https://github.com/ArshanShaikh87/The-Wedding-Tree.git"><i className="fa-brands fa-github"></i></a>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-card modern">
          <div className="project-img">
            <img src={project2} alt="Personal Portfolio Project" />
          </div>

          <div className="project-content">
            <span className="project-tag">Case Study</span>

            <h3>Personal Portfolio</h3>

            <div className="project-story">
              <p><strong>Problem:</strong> Need for a professional online presence to showcase skills and projects.</p>
              <p><strong>Solution:</strong> Designed a modern developer portfolio using React frontend and Spring Boot backend.</p>
              <p><strong>Impact:</strong> Clear presentation of skills, projects, and readiness for industry roles.</p>
            </div>

            <div className="project-tech-badges">
              <span>React</span>
              <span>Spring Boot</span>
              <span>Oracle</span>
            </div>

            <div className="project-links">
              <a href="https://arshanshaikh.vercel.app" className="primary">Live Demo</a>
              <a href="https://github.com/ArshanShaikh87/Portfolio.git"><i className="fa-brands fa-github"></i></a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Portfolio;
