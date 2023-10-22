// import { useState } from "react";
// import PropTypes from "prop-types";

// function Input({ type, value, onChange, label, error }) {
//   const [isFocused, setIsFocused] = useState(false);
//   const [hasValue, setHasValue] = useState(value !== "");

//   const labelStyle = () => {
//     if (isFocused) {
//       return "-top-3 m-0 p-0 text-sm text-primary-800";
//     }
//     if (hasValue) {
//       return "-top-3 m-0 p-0 text-sm text-gray-500";
//     }
//     return "text-base text-gray-500";
//   };

//   const handleChange = (e) => {
//     const inputValue = e.target.value;
//     onChange(inputValue);
//     setHasValue(inputValue !== "");
//   };

//   const handleFocus = () => {
//     setIsFocused(true);
//   };

//   const handleBlur = () => {
//     setIsFocused(false);
//   };

//   return (
//     <div className="relative">
//       <input
//         type={type}
//         value={value}
//         onChange={handleChange}
//         onFocus={handleFocus}
//         onBlur={handleBlur}
//         className="w-full border-x-0 border-b-2 border-t-0 border-solid border-secondary-600 bg-transparent px-3 py-2 text-base font-light leading-5 tracking-mobileParagraph text-primary-100 outline-none focus:border-primary-800 focus:outline-none md:text-base md:leading-8 md:tracking-tabletParagraph lg:tracking-desktopParagraph"
//       />
//       <label
//         htmlFor="name"
//         className={`absolute left-0 px-1 transition-all ${labelStyle()}`}
//       >
//         {label}
//       </label>
//       {error && <p className="mt-1 text-sm text-status-warningRed">{error}</p>}
//     </div>
//   );
// }

// export default Input;

// Input.propTypes = {
//   type: PropTypes.string.isRequired,
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
//   label: PropTypes.string.isRequired,
//   error: PropTypes.string.isRequired,
// };

import { useState } from "react";
import PropTypes from "prop-types";

function Input({ type, value, onChange, label, error, inputRef }) {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(value !== "");

  const labelStyle = () => {
    if (isFocused) {
      return "-top-3 m-0 p-0 text-sm text-primary-800";
    }
    if (hasValue) {
      return "-top-3 m-0 p-0 text-sm text-gray-500";
    }
    return "text-base text-gray-500";
  };

  const handleChange = (e) => {
    const inputValue = e.target.value;
    onChange(inputValue);
    setHasValue(inputValue !== "");
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className="relative">
      <input
        type={type}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        ref={inputRef} // Using inputRef to register the input field
        className="w-full border-x-0 border-b-2 border-t-0 border-solid border-secondary-600 bg-transparent px-3 py-2 text-base font-light leading-5 tracking-mobileParagraph text-primary-100 outline-none focus:border-primary-800 focus:outline-none md:text-base md:leading-8 md:tracking-tabletParagraph lg:tracking-desktopParagraph"
      />
      <label
        htmlFor="name"
        className={`absolute left-0 px-1 transition-all ${labelStyle()}`}
      >
        {label}
      </label>
      {error && <p className="mt-1 text-sm text-status-warningRed">{error}</p>}
    </div>
  );
}

export default Input;

Input.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  inputRef: PropTypes.func.isRequired, // Adding inputRef prop for registering the input field
};
