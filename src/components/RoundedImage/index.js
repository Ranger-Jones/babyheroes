//css
import "./style.scss";

const RoundedImage = ({ url, alt }) => {
  if (url === null) {
    url =
      "https://res.cloudinary.com/dqcsk8rsc/image/upload/v1577268053/avatar-1-bitmoji_upgwhc.png";
  }
  return <img src={url} alt={alt} className="rounded-img" />;
};

export default RoundedImage;
