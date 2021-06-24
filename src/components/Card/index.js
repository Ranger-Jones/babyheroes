import React from "react";

//css
import "./style.scss";

export default function Card({ url, title, img, time, content }) {
  return (
    <ul className="cards">
      <li>
        <a href={url} className="card">
          <img src={img} className="card-image" alt="" />
          <div className="card-overlay">
            <div className="card-header">
              <svg className="card-arc" xmlns="http://www.w3.org/2000/svg">
                <path />
              </svg>
              <img
                className="card-thumb"
                src="https://i.imgur.com/7D7I6dI.png"
                alt=""
              />
              <div className="card-header-text">
                <h3 className="card-title">{title}</h3>
                <span className="card-status">{time}</span>
              </div>
            </div>
            <p className="card-description">{content}</p>
          </div>
        </a>
      </li>
    </ul>
  );
}
