import PropTypes from "prop-types";
import css from "./InputWithLabel.module.css";

export const InputWithLabel = ({
  type,
  name,
  title,
  placeholder = "",
  defaultValue = "",
}) => {
  return (
    <label className={css.label}>
      <span className={css.labelTitle}>{title}</span>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
    </label>
  );
};

InputWithLabel.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
};
