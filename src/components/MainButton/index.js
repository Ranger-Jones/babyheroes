// css
import "./style.scss";

const MainButton = ({ title, url }) => {
  return (
    <a href={url} className="btn">
      {title}
    </a>
  );
};

export default MainButton;
