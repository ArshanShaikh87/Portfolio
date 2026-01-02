import { useEffect, useState } from 'react';
import '../styles/navbar.css';

function Navbar() {
  const [active, setActive] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll('section');

    const onScroll = () => {
      let current = 'home';

      sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          current = section.getAttribute('id');
        }
      });

      setActive(current);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <h2 className="logo">&lt; <span>arshaan</span> &gt;</h2>

      {/* Hamburger */}
      <div
        className={`menu-icon ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-links ${menuOpen ? 'show' : ''}`}>
        <li><a href="#home" className={active === 'home' ? 'active' : ''} onClick={closeMenu}>Home</a></li>
        <li><a href="#about" className={active === 'about' ? 'active' : ''} onClick={closeMenu}>About</a></li>
        <li><a href="#services" className={active === 'services' ? 'active' : ''} onClick={closeMenu}>Services</a></li>
        <li><a href="#portfolio" className={active === 'portfolio' ? 'active' : ''} onClick={closeMenu}>Portfolio</a></li>
        <li><a href="#contact" className={active === 'contact' ? 'active' : ''} onClick={closeMenu}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
