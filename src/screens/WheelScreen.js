import WheelComponent from "react-wheel-of-prizes";

const WheelScreen = () => {
  const segments = [
    "Nacktbild von Jakob",
    "3g bestes kush",
    "0 Punkte Abitur",
    "Nacktbild von Jakob",
    "3g bestes kush",
    "0 Punkte Abitur",
    "Nacktbild von Jakob",
    "Eine Nacht mit Ellen MASK",
  ];

  const segColors = [
    "#EE4040",
    "#F0CF50",
    "#815CD1",
    "#3DA5E0",
    "#34A24F",
    "#F9AA1F",
    "#EC3F3F",
    "#FF9000",
  ];

  const onFinished = (winner) => {
    console.log(winner);
    alert(winner);
  };

  return (
    <div className="content shop-page">
      <div className="l-main-page">
        <div className="l-main">
          <WheelComponent
            segments={segments}
            segColors={segColors}
            winningSegment="0 Punkte Abitur"
            onFinished={(winner) => onFinished(winner)}
            primaryColor="black"
            contrastColor="white"
            buttonText="Spin"
            isOnlyOnce={false}
            size={200}
            upDuration={100}
            downDuration={1000}
            fontFamily="Arial"
          />
        </div>
      </div>
    </div>
  );
};

export default WheelScreen;
