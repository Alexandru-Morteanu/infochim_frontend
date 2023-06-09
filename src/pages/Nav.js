import React from "react";
import { Link } from "react-router-dom";

function Nav({ windowHeight, fill }) {
  return (
    <nav
      id="nav"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: 80,
        background: windowHeight > 20 || fill ? "black" : null,
        color: "white",
        zIndex: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          position: "relative",
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 20,
        }}
      >
        <Link to="/" className="nav-item">
          Acasă
        </Link>{" "}
        <Link to="/ph" className="nav-item">
          pH
        </Link>
        <Link to="/indicatori" className="nav-item">
          Indicatori
        </Link>
        <div style={{ width: 20 }}>
          <Link
            to="/pascupas"
            className="nav-item"
            style={{
              margin: 0,
              padding: 0,
              color: "rgb(202, 106, 138)",
              lineHeight: 0.8,
            }}
          >
            Pas cu Pas
          </Link>
        </div>
        <Link to="/lab" className="nav-item">
          Lab
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
