import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>

      <div className="project-container">
        <ProjectCard
          title="Portfolio Website"
          description="Responsive portfolio website built using ReactJS."
        />

        <ProjectCard
          title="Amazon Clone"
          description="E-commerce UI clone using ReactJS and CSS."
        />

        <ProjectCard
          title="Weather App"
          description="Weather forecasting app using API integration."
        />
      </div>
    </section>
  );
}

export default Projects;