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
      <h3 id="project-name" className="uppercase p-5 relative text-xl">
        {projectName}
      </h3>

      <img
        src={desktopScreen}
        alt=""
        className="absolute w-[60%] left-[8%] -rotate-[7deg] z-10"
      />
      <img
        src={mobileScreen}
        alt=""
        className="absolute w-[25%] left-[78%] -rotate-[7deg] z-10"
      />
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
