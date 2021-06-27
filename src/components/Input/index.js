// css
import "./style.scss";

const Input = ({ title, onChange, id, value, name }) => {
  return (
    <div>
      <label className="input">
        <input
          className="input__field"
          type="text"
          placeholder=" "
          onChange={onChange}
          name={name}
          id={id}
          value={value}
        />
        <span className="input__label">{title}</span>
      </label>
    </div>
  );
};

export default Input;
