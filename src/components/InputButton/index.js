// css
import "./style.scss";

const InputButton = ({ url, title, type, onClick, style }) => {
  return (
    <button type={type} onClick={onClick} style={{ ...style }}>
      {title}
    </button>
  );
};

export default InputButton;
