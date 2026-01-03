import { useEffect, useState } from 'react';
import '../styles/home.css';

function Home() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // typing duration = 3s (same as CSS)
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="home">
      <div className="home-content">
        <h1 className="typing">
          Hi, I’m <br />
          <span>Arshan Shaikh</span>
        </h1>

        {/* Content appears AFTER typing */}
        <div className={`hero-reveal ${showContent ? 'show' : ''}`}>
          <h3>Full Stack Developer</h3>

          <p>
            I build modern, responsive, and scalable web applications using
            React, Spring Boot, and Oracle Database.
          </p>

          <div className="home-btns">
            <a href="#contact" className="btn">
              Contact Me
            </a>

            <a
            href="https://github.com/ArshanShaikh87"
            target="_blank"
            rel="noopener noreferrer"
            className="btn primary">
            <i className="fa-brands fa-github"></i>
            <span> Github</span>
            </a>

            
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
