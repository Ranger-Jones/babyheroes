import React from "react";

const Attribution = ({ url, author }) => {
  return (
    <div>
      <a href={url}>created by {author}</a>
    </div>
  );
};

export default Attribution;
