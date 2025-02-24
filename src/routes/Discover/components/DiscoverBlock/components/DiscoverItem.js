import React from "react";
import "../styles/_discover-item.scss";

export default function DiscoverItem({ images, name, href }) {
  const handleOnClick = () => {
    if (href) {
      window.open(href, "_blank");
    }
  };

  return (
    <div className="discover-item animate__animated animate__fadeIn">
      <div
        className="discover-item__art"
        style={{ backgroundImage: `url(${images[0].url})` }}
        onClick={handleOnClick}
      />
      <p className="discover-item__title">{name}</p>
    </div>
  );
}
