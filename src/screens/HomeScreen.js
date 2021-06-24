import React from "react";

//components
import Heading from "../components/Heading";
import TypingText from "../components/TypingText";
import MainButton from "../components/MainButton";

// css
import "./screens.scss";

export default function HomeScreen() {
  return (
    <div>
      <div className="background-image"></div>
      <div className="content main-page">
        <div className="l-main-page">
          <div className="l-main">
            <Heading firstword="Baby" secondword="Heroes" />
          </div>
        </div>
        <div className="l-main-page">
          <div className="l-main">
            <TypingText text="Jonathan ist ein Hurensohn" />
          </div>
        </div>
        <div className="l-button-row">
          <div className="l-button">
            <MainButton title="Explore" url="/explore" />
          </div>
          <div className="l-button">
            <MainButton title="Baby Sets" url="/boxes" />
          </div>
          <div className="l-button">
            <MainButton title="Brand New" url="/items" />
          </div>
        </div>
      </div>
    </div>
  );
}
