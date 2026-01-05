import '../styles/contact.css';

function Contact() {
  return (
    <section id="contact" className="contact">

      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-info">
          <h2 className="contact-title">
            Contact <span>Me!</span>
          </h2>

          <p>
            Feel free to reach out for job opportunities, freelance work,
            collaborations, or any web development related queries.
          </p>

          <div className="contact-item">
            <span>
              <i className="fas fa-phone"></i>
            </span>
            <a href="tel:+918793740825">+91 8793740825</a>
          </div>

          <div className="contact-item">
            <span>
              <i className="fas fa-envelope"></i>
            </span>
            <a href="mailto:arshanshaikh200@gmail.com">
              arshanshaikh200@gmail.com
            </a>
          </div>

          <div className="social-links">
            <a href="https://www.linkedin.com" target="_blank" title="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>

            <a href="https://github.com" target="_blank" title="GitHub">
              <i className="fab fa-github"></i>
            </a>

            <a href="https://www.instagram.com" target="_blank" title="Instagram">
              <i className="fab fa-instagram"></i>
            </a>

            <a href="https://www.instagram.com" target="_blank" title="Whatsapp">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="phone" placeholder="Your Mobile" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>

      </div>
    </section>
  );
}

export default Contact;
