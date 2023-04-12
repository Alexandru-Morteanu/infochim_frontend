import React, { useState } from "react";

function BlueSquare() {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setOffset({
      x: event.clientX - position.x,
      y: event.clientY - position.y
    });
  };

  const handleMouseMove = (event) => {
    const blueSquare = document.getElementById("blue-square");
    const blueSquareRect = blueSquare.getBoundingClientRect();
    const redSquare = document.getElementById("red-square");
    const redSquareRect = redSquare.getBoundingClientRect();

    const touchingRedSquare =
      blueSquareRect.right >= redSquareRect.left &&
      blueSquareRect.left <= redSquareRect.right &&
      blueSquareRect.bottom >= redSquareRect.top &&
      blueSquareRect.top <= redSquareRect.bottom;

    if (touchingRedSquare) {
        setPosition({
            x: redSquareRect.right - blueSquareRect.width,
            y: redSquareRect.bottom - blueSquareRect.height
          });
    }

    if (!isDragging) return;
    setPosition({
      x: event.clientX - offset.x,
      y: event.clientY - offset.y
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      id="blue-square"
      className="buret"
      style={{
        position: "absolute",
        top: position.y,
        left: position.x,
        cursor: "move",
        zIndex:"1"
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    />
  );
}

function RedSquare() {
  return (
    <div
      id="red-square"
      style={{
        position: "absolute",
        width: "100px",
        height: "100px",
        backgroundColor: "red",
        top: "500px",
        left: "500px"
      }}
    />
  );
}

function Test() {
  return (
    <div>
      <RedSquare />
      <BlueSquare />
    </div>
  );
}

export default Test;
