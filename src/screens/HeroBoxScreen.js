import React from "react";

// components
import Heading from "../components/Heading";
import Card from "../components/Card";

// css
import "./screens.scss";

export default function HeroBoxScreen() {
  const img =
    "https://www.item24.de/fileadmin/_processed_/8/0/csm_1.alu-konstruktionsprofil-mb-systembaukasten-item_e6e23f2009.jpg";
  return (
    <div class="content shop-page">
      <div className="l-main-page">
        <div className="l-main">
          <Heading firstword="Shop" secondword="Now" />
          <hr style={{ marginLeft: "5rem" }} />
        </div>
      </div>
      <div className="l-shop-page">
        <div className="l-shop-item">
          <Card
            title="Luis Hoden"
            url="/"
            content="Frisch geerntet"
            img={img}
          />
        </div>
        <div className="l-shop-item">
          <Card
            title="Luis Niere"
            url="/"
            content="Frisch geerntet"
            img={img}
          />
        </div>
        <div className="l-shop-item">
          <Card title="Luis Herz" url="/" content="Frisch geerntet" img={img} />
        </div>
        <div className="l-shop-item">
          <Card
            title="Luis Leber"
            url="/"
            content="Frisch geerntet"
            img={img}
          />
        </div>
        <div className="l-shop-item">
          <Card img={img} />
        </div>
        <div className="l-shop-item">
          <Card img={img} />
        </div>
        <div className="l-shop-item">
          <Card img={img} />
        </div>
        <div className="l-shop-item">
          <Card img={img} />
        </div>
        <div className="l-shop-item">
          <Card img={img} />
        </div>
        <div className="l-shop-item">
          <Card img={img} />
        </div>
        <div className="l-shop-item">
          <Card img={img} />
        </div>
        <div className="l-shop-item">
          <Card img={img} />
        </div>
      </div>
    </div>
  );
}
