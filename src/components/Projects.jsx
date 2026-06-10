function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>

      <div className="project-container">
        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>Responsive portfolio website built using ReactJS.</p>
        </div>

        <div className="project-card">
          <h3>Amazon Clone</h3>
          <p>E-commerce UI clone using ReactJS and CSS.</p>
        </div>

        <div className="project-card">
          <h3>Weather App</h3>
          <p>Weather forecasting app using API integration.</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;