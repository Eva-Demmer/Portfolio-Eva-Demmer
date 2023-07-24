import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { apiProjectById } from "../services/api.projects";
import Technologies from "../assets/icons/technologies.svg";

function ProjectDetail() {
  const [project, setProject] = useState();
  const { id } = useParams();

  useEffect(() => {
    apiProjectById(id)
      .then((data) => {
        setProject(data);
      })
      .catch((error) => {
        console.error("Error getting project by id", error);
      });
  }, [id]);

  if (!project) {
    return null;
  }

  return (
    <div
      id="project-detail"
      className="flex h-full w-full flex-col px-5 pb-5 md:px-10 md:pb-10 lg:px-20 lg:pb-20"
    >
      <h1 className="mt-[65px]">Projets</h1>
      <main id="main-project-detail" className="flex w-full gap-10 flex-col">
        <div
          id="media"
          className="flex h-full w-full gap-3 flex-col items-center"
        >
          <img src={project.video} alt="" className="w-full rounded-lg" />
          <div id="small-media" className="flex w-full gap-2 justify-center">
            <img
              src={project.image_1}
              alt=""
              id="slide-1"
              className="h-14 w-14 bg-form rounded-lg"
            />
            <img
              src={project.image_2}
              alt=""
              id="slide-1"
              className="h-14 w-14 bg-form rounded-lg"
            />
            <img
              src={project.image_3}
              alt=""
              id="slide-1"
              className="h-14 w-14 bg-form rounded-lg"
            />
          </div>
          <div>...</div>
        </div>
        <div id="project-info">
          <div
            id="summary"
            className="flex w-full flex-col justify-between gap-5"
          >
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <div className="flex gap-5">
              <img src={Technologies} alt="" />
              {project.technologies}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProjectDetail;
