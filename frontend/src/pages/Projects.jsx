import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { apiAllProjects } from "../services/api.projects";
import ProjectCard from "../components/projects/ProjectCard";

// TODO: show max 10 projects total
// QUESTION : Do I want to show most recent ones or best ones? Best ones.
// TODO: for cover img use figma screens

// NOTE: snap point tailwind for carousel in desktop

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    apiAllProjects()
      .then((data) => {
        setProjects(data);
      })
      .catch((error) => {
        console.error("Error getting projects", error);
      });
  }, []);

  return (
    <div
      id="projects"
      className="flex h-full w-full flex-col px-5 pb-5 md:px-10 md:pb-10 lg:px-20 lg:pb-20"
    >
      <main id="main-projects" className="mt-[65px]">
        <h1>Projets</h1>
        <div id="project-cards" className="flex flex-col gap-5 pt-3 pb-5">
          {projects &&
            projects.map((project) => (
              <Link to={`/projects/${project.id}`} key={project.id}>
                <ProjectCard
                  projectName={project.name}
                  desktopScreen={project.screenshot_desktop}
                  mobileScreen={project.screenshot_mobile}
                  projectSummary={project.summary}
                />
              </Link>
            ))}
        </div>
      </main>
    </div>
  );
}

export default Projects;
