import '../styles/home.css';

function Home() {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <h1>
          Hi, I’m<span>Arshan</span>
        </h1>

        <h3>Full Stack Java Developer</h3>

        <p>
          I build modern, responsive, and scalable web applications using
          React, Spring Boot, and Oracle Database.
        </p>

        <div className="home-btns">
          <a href="#portfolio" className="btn primary">View Portfolio</a>
          <a href="#contact" className="btn">Contact Me</a>
        </div>
      </div>
    </section>
  );
}

export default Home;
