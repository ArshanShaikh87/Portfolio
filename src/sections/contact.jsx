import '../styles/contact.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>
        Contact <span>Me</span>
      </h2>

      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p>
            Feel free to contact me for opportunities, collaborations,
            or any queries related to web development.
          </p>

          <div className="contact-item">
            <span>📞</span>
            <div>+91 8793740825</div>
          </div>

          <div className="contact-item">
            <span>✉️</span>
            <div>arshanshaikh200@gmail.com</div>
          </div>

          <div className="social-links">
            <a href="#" title="LinkedIn">in</a>
            <a href="#" title="GitHub">GH</a>
            <a href="#" title="Instagram">IG</a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="tel" placeholder="Your Phone" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>

          <button type="submit">Send Message</button>
        </form>

      </div>
    </section>
  );
}

export default Contact;
