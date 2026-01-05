import '../styles/footer.css';

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">
        {/* Name + Role */}
        <div className="footer-brand">
          <h3>
            Arshan <span>Shaikh</span>
          </h3>
          <p>Full Stack Java Developer</p>
        </div>

        {/* Social Icons */}
        <div className="footer-socials">
          <a href="https://www.linkedin.com" target="_blank" title="LinkedIn">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://github.com" target="_blank" title="GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" title="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.Whatsapp.com" target="_blank" title="Whatsapp">
              <i className="fab fa-whatsapp"></i>
            </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Arshan Shaikh. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;
