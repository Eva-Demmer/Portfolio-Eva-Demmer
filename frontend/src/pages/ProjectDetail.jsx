import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { apiProjectById } from "../services/api.projects";
import apiImagesByProjectId from "../services/api.images";
import Technologies from "../assets/icons/technologies.svg";

// FIX: doesn't display images ?!

function ProjectDetail() {
  const [project, setProject] = useState();
  const [image, setImage] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const projectData = await apiProjectById(id);
        setProject(projectData);
      } catch (error) {
        console.error("Error getting projects by id data", error);
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    if (project && project.id) {
      const fetchImages = async () => {
        try {
          const imagesData = await apiImagesByProjectId(project.id);
          setImage(imagesData);
        } catch (error) {
          console.error("Error getting images by project_id data", error);
        }
      };

      fetchImages();
    }
  }, [project]);

  if (!project) {
    return null;
  }

  if (!image) {
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
          <img
            src={project.video_desktop}
            alt=""
            className="w-full rounded-lg"
          />
          <div
            id="small-media"
            className="flex w-full gap-2 justify-center border border-solid border-red-500"
          >
            <img
              src={project.video_desktop}
              alt=""
              className="h-12 w-18 bg-form rounded"
            />
            <img
              src={image.image_desktop}
              alt=""
              className="h-12 w-18 bg-form rounded"
            />
            {/* {image.length > 0 ? (
              <div>
                <ul>
                  {image.map((item) => (
                    <li
                      key={item.id}
                      className="flex w-full gap-2 justify-center"
                    >
                      <img
                        src={item.image_desktop}
                        alt=""
                        className="h-12 w-18 bg-form rounded"
                      />
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <p className="h-12 bg-form rounded-lg">
                No <br />
                image
              </p>
            )} */}
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
            <div className="flex gap-5 pb-5 md:pb-10 lg:pb-20">
              <img src={Technologies} alt="" />
              <p>{project.technologies}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProjectDetail;
