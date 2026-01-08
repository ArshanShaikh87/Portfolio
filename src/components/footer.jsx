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
          <a href="https://www.linkedin.com/in/arshanshaikh" target="_blank" title="LinkedIn">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/ArshanShaikh87" target="_blank" title="GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.instagram.com/ars_shk_?igsh=eWhteGl4cGw0NHUx" target="_blank" title="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="+918793740825" target="_blank" title="Whatsapp">
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
