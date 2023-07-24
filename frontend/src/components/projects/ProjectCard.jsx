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
      className="relative overflow-hidden w-full rounded-xl bg-form text-primary-100"
    >
      <h3 id="project-name" className="uppercase p-5 text-xl">
        {projectName}
      </h3>
      <div className="-rotate-6 z-10 flex h-full">
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
      <p className="p-3 mt-20 z-20 relative backdrop-blur">{projectSummary}</p>
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
