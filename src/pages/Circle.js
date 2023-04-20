import React, { useEffect, useState } from "react";

function Circle(props) {
  const { numCircles, getOpacity, c } = props;
  const [circles, setCircles] = useState([]);
  const [opacity, setOpacity] = useState(getOpacity);
  const [i, setI] = useState(1);

  useEffect(() => {
    const circleStyle = {
      width: (i * i) / 3,
      height: (i * i) / 3,
      borderRadius: "50%",
      position: "absolute",
      backgroundColor: `rgb(${c[3]},${c[4]}, ${c[5]})`,
      left: -(i * i) / 6,
      top: -(i * i) / 6,
      border: "1px solid black",
      zIndex: -i,
      opacity: opacity,
    };
    console.log(c);
    setOpacity(getOpacity);
    setCircles([...circles, <div key={i} style={circleStyle} />]);
    setI(i + 1);
  }, [numCircles]);
  useEffect(() => {
    setOpacity(getOpacity);
    setCircles((prevCircles) =>
      prevCircles.map((circle) =>
        React.cloneElement(circle, {
          style: { ...circle.props.style, opacity: getOpacity },
        })
      )
    );
    if (getOpacity === 0.5) {
      console.log("minus");
      setI(1);
      setCircles([]);
    }
  }, [getOpacity]);

  const circleContainerStyle = {
    borderRadius: "50%",
    position: "relative",
    zIndex: -10,
  };

  return (
    <div id="circle" style={circleContainerStyle}>
      {circles}
    </div>
  );
}

export default Circle;
