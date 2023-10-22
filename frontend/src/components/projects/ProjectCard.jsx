import PropTypes from "prop-types";

function ProjectCard({
  projectName,
  desktopScreen,
  mobileScreen,
  projectSummary,
}) {
  return (
    <div
      id="project-card"
      className="relative w-full overflow-hidden rounded-xl bg-form text-primary-100"
    >
      <h3 id="project-name" className="p-5 text-xl uppercase">
        {projectName}
      </h3>
      <div className="z-10 flex h-full -rotate-6">
        <img
          src={desktopScreen}
          alt=""
          className="absolute left-[5%] w-[60%]"
        />
        <img
          src={mobileScreen}
          alt=""
          className="absolute left-[70%] w-[25%]"
        />
      </div>
      <p className="relative z-10 mt-20 p-3 backdrop-blur">{projectSummary}</p>
    </div>
  );
}

ProjectCard.propTypes = {
  projectName: PropTypes.string.isRequired,
  desktopScreen: PropTypes.string.isRequired,
  mobileScreen: PropTypes.string.isRequired,
  projectSummary: PropTypes.string.isRequired,
};

export default ProjectCard;
