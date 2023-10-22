import PropTypes from "prop-types";

function NavLink({ text, link }) {
  const handleClick = () => {
    window.open(link);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="self-start border-0 bg-transparent uppercase tracking-desktopH3 text-primary-100 outline-none"
      style={{ fontFamily: '"Space Grotesk", sans-serif' }}
    >
      <h5>{text}</h5>
    </button>
  );
}

export default NavLink;

NavLink.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
