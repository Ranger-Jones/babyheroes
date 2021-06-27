// css
import "./style.scss";

const InputLabel = ({ title }) => {
  return (
    <h2>
      <svg className="icon" aria-hidden="true">
        <use href="#icon-coffee" />
      </svg>
      {title}
    </h2>
  );
};

export default InputLabel;
