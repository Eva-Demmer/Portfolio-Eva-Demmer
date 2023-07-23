import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function IconButton({ navigateLink, src, alt }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(navigateLink);
  };

  return (
    <button
      id="icon-btn"
      type="button"
      onClick={handleClick}
      className="cursor-pointer self-center border-0 bg-transparent"
    >
      <img src={src} alt={alt} className="h-12 w-12" />
    </button>
  );
}

export default IconButton;

IconButton.propTypes = {
  navigateLink: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
