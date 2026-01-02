import '../styles/about.css';
import profileImg from '../assets/about.jpg';

function About() {
  return (
    <section id="about" className="about">
      <div className="about-wrapper">

        {/* Image */}
        <div className="about-img">
          <img src={profileImg} alt="Arshan Profile" />
        </div>

        {/* Content */}
        <div className="about-content">
          <h2>
            About <span>Me</span>
          </h2>

          <p>
            I’m a passionate Full Stack Java Developer with hands-on experience
            in building responsive and scalable web applications.
          </p>

          <p>
            My core tech stack includes React for frontend development, Spring
            Boot for backend APIs, and Oracle Database for reliable data
            management.
          </p>

          <p>
            As a fresher, I focus on writing clean code, understanding system
            design basics, and continuously improving through real-world
            projects.
          </p>
        </div>

      </div>
      <div className="skills">
  <h4>My Skills</h4>

  <div className="skills-grid">
    <div className="skill-item">
      <i className="devicon-react-original"></i>
      <span>React</span>
    </div>

    <div className="skill-item">
      <i className="devicon-html5-plain"></i>
      <span>HTML</span>
    </div>

    <div className="skill-item">
      <i className="devicon-css3-plain"></i>
      <span>CSS</span>
    </div>

    <div className="skill-item">
      <i className="devicon-javascript-plain"></i>
      <span>JavaScript</span>
    </div>

    <div className="skill-item">
      <i className="devicon-java-plain"></i>
      <span>Java</span>
    </div>

    <div className="skill-item">
      <i className="devicon-spring-plain"></i>
      <span>Spring Boot</span>
    </div>

    <div className="skill-item">
      <i className="devicon-oracle-original"></i>
      <span>Oracle</span>
    </div>

    <div className="skill-item">
      <i className="devicon-git-plain"></i>
      <span>Git</span>
    </div>

    <div className="skill-item">
      <i className="devicon-github-original"></i>
      <span>GitHub</span>
    </div>
  </div>
</div>

    </section>
  );
}

export default About;
