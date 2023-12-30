import PropTypes from "prop-types";

const Input = (id, type, placeholder, label, defaultValue) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        defaultValue={defaultValue}
        className="w-full border border-gray-300"
      />
    </div>
  );
};

Input.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  defaultValue: PropTypes.string,
};

export default Input;
