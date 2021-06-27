// css
import "./style.scss";

const InputButtonGroup = ({ children, style }) => {
  return (
    <div className="button-group" style={{ ...style }}>
      {children}
    </div>
  );
};

export default InputButtonGroup;
