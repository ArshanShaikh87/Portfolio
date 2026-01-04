import '../styles/about.css';
// import profileImg from '../assets/about3.jpg';

const skillGroups = {
  Frontend: [
    { name: 'React', icon: 'devicon-react-original colored' },
    { name: 'HTML5', icon: 'devicon-html5-plain colored' },
    { name: 'CSS3', icon: 'devicon-css3-plain colored' },
    { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
  ],
  Backend: [
    { name: 'Java', icon: 'devicon-java-plain colored' },
    { name: 'Spring Boot', icon: 'devicon-spring-plain colored' },
    { name: 'Python', icon: 'devicon-python-plain colored' },
    { name: 'Django', icon: 'devicon-django-plain colored' },
    { name: 'Oracle DB', icon: 'devicon-oracle-original colored' },
  ],
  Tools: [
    { name: 'Git', icon: 'devicon-git-plain colored' },
    { name: 'GitHub', icon: 'devicon-github-original colored' },
    { name: 'Vercel', icon: 'devicon-vercel-plain colored' },
  ],
};

function About() {
  return (
    <>
      {/* ================= ABOUT HERO ================= */}
      <section
        id="about"
        className="about-bg"
        // style={{ backgroundImage: `url(${profileImg})` }}
      >
        <div className="about-overlay">
          <div className="about-text">
            <h2>
              About <span>Me</span>
            </h2>

            <p>
              I’m <strong>Arshan Munir Shaikh</strong>, a Full Stack Java Developer passionate about building clean, 
              scalable, and user-friendly web applications.
               I enjoy working on both frontend and backend development and continuously improving my technical skills.
            </p>

            <p>
              I work with <strong>React</strong>, <strong>Spring Boot</strong>, <strong>Python, Django</strong>, and
              <strong> Oracle Database</strong>, As a fresher, I focus on practical learning, real-world projects,
               and writing code that follows industry standards and best practices.
            </p>

            <div className="about-actions">
              <a
                href="https://www.canva.com/design/DAGTj_wmQa0/QwlhnMzjYulcDocHrbvEcg/edit?utm_content=DAGTj_wmQa0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Check My Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SKILLS SECTION ================= */}
      <section className="skills">
        {Object.entries(skillGroups).map(([group, items]) => (
          <div className="skill-group" key={group}>
            <h4>{group}</h4>

            <div className="skills-horizontal">
              {items.map((skill, index) => (
                <div className="skill-logo" key={index}>
                  <i className={skill.icon}></i>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default About;
