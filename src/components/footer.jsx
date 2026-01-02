import '../styles/footer.css';

function Footer() {
  return (
    <footer className="footer">
      <h3>
        Arshan <span>Shaikh</span>
      </h3>

      <p>
        Full Stack Java Developer | React • Spring Boot • Oracle
      </p>

      <div className="footer-socials">
        <a href="#" title="LinkedIn">in</a>
        <a href="#" title="GitHub">GH</a>
        <a href="#" title="Instagram">IG</a>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Arshan Shaikh. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
