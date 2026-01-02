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
        <div className="project-card">
          <div className="project-img">
            <img src={project1} alt="Wedding Tree Project" />
          </div>

          <div className="project-content">
            <h3>The Wedding Tree</h3>
            <p>
              A complete event management website with responsive UI,
              gallery, and contact form integration.
            </p>

            <div className="project-tech">
              React / Django / PostgreSQL
            </div>

            <div className="project-links">
              <a href="#" className="primary">Live Demo</a>
              <a href="#">GitHub</a>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <div className="project-img">
            <img src={project2} alt="Portfolio Project" />
          </div>

          <div className="project-content">
            <h3>Personal Portfolio</h3>
            <p>
              A full stack developer portfolio built using React frontend
              and Spring Boot backend with Oracle database.
            </p>

            <div className="project-tech">
              React / Spring Boot / Oracle
            </div>

            <div className="project-links">
              <a href="#" className="primary">Live Demo</a>
              <a href="#">GitHub</a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Portfolio;
