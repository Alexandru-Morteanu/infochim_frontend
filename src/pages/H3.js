import React from "react";

function H3({ text, width }) {
  return (
    <h3>
      <div
        style={{
          display: "flex",
          gap: 10,
          justifyContent: "center",
          zIndex: 2,
        }}
      >
        <div
          style={{
            position: "absolute",
            zIndex: -1,
            height: "100%",
            width: `${width}%`,
            background: "rgb(202, 106, 138)",
            transform: "translateX(5%)",
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginLeft: 20,
          }}
        >
          {text}
        </div>
      </div>
    </h3>
  );
}

export default H3;
