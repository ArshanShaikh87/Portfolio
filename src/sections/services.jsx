import '../styles/services.css';

function Services() {
  return (
    <section id="services" className="services">
      <h2>
        My <span>Services</span>
      </h2>

      <div className="services-grid">

        <div className="service-card">
          <div className="service-icon">💻</div>
          <h3>Frontend Development</h3>
          <p>
            Building responsive and interactive user interfaces using
            React, HTML, CSS, and modern JavaScript.
          </p>
        </div>

        <div className="service-card">
          <div className="service-icon">⚙️</div>
          <h3>Backend Development</h3>
          <p>
            Developing secure and scalable REST APIs using Spring Boot
            with clean architecture.
          </p>
        </div>

        <div className="service-card">
          <div className="service-icon">🗄️</div>
          <h3>Database Management</h3>
          <p>
            Designing and managing relational databases using Oracle
            with optimized queries.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Services;
