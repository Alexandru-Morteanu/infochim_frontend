import React from "react";

function H3({ text }) {
  return (
    <h3
      style={{
        display: "flex",
        justifyContent: "center",
        background: "rgb(200,200,200)",
      }}
    >
      {text}
    </h3>
  );
}

export default H3;
