import '../styles/services.css';

const servicesData = [
  {
    icon: 'fa-code',
    title: 'Frontend Development',
    desc: 'Building responsive, accessible, and user-friendly interfaces using React, HTML, CSS, and modern JavaScript.',
  },
  {
    icon: 'fa-server',
    title: 'Backend API Development',
    desc: 'Developing secure and scalable RESTful APIs using Spring Boot with clean and maintainable architecture.',
  },
  {
    icon: 'fa-database',
    title: 'Database & Data Handling',
    desc: 'Designing efficient database schemas and optimized queries using Oracle for reliable data management.',
  },
  {
    icon: 'fa-gauge-high',
    title: 'Performance & Optimization',
    desc: 'Focusing on application performance, scalability, and deployment-ready solutions for real-world use cases.',
  },
];

function Services() {
  return (
    <section id="services" className="services">
      <h2>
        My <span>Services</span>
      </h2>

      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">
              <i className={`fa-solid ${service.icon}`}></i>
            </div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
