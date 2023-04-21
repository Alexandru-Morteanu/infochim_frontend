import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import image from "../homepage.jpg";
import Footer from "./Footer";
function Main() {
  const { homeimage, section1, section2 } = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    function handleScroll() {
      setWindowHeight(window.scrollY);
    }
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
      }}
    >
      <nav
        id="nav"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: 80,
          background: windowHeight > 20 ? "black" : null,
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
            right: windowWidth > 500 ? 140 : 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 20,
          }}
        >
          <Link to="/" className="nav-item">
            Acasa
          </Link>
          <Link to="/indicatori" className="nav-item">
            Indicatori
          </Link>
          <Link to="/ph" className="nav-item">
            PH
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
      <div
        id="container"
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          background: "rgb(240,230,230)",
          gap: 20,
        }}
      >
        <div
          id="section1"
          ref={section1}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: windowWidth > 500 ? "100vh" : "70%",
            background:
              "linear-gradient(to right, rgb(34,34,36) 50%, rgb(18,18,18) 50%)",
            position: "relative",
          }}
        >
          <img
            className="homeimage"
            ref={homeimage}
            src={image}
            alt="Image description"
            style={{
              right: windowWidth > 500 ? "auto" : "0%",
              zIndex: 10,
            }}
          />
          <div
            style={{
              position: "absolute",
              height: "11%",
              width: "100%",
              background: "rgb(2,2,4)",
              zIndex: 5,
              left: 0,
              bottom: 0,
            }}
          />
          <div
            id="container-top"
            style={{
              position: "absolute",
              zIndex: 15,
              top: 0,
              height: "100%",
              color: "white",
              width: windowWidth > 500 ? 300 : "50%",
            }}
          >
            <div
              style={{
                position: "absolute",
                background: "rgb(70,70,70)",
                height: windowWidth > 500 ? "200px" : "140px",
                width: "80%",
                fontSize: 50,
                top: "32%",
                left: "-30%",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  display: "flex",
                  gap: 10,
                  left: "-10%",
                  flexDirection: "column",
                  zIndex: 2,
                }}
              >
                <div
                  style={{
                    width: "100%",
                    color: "rgb(202, 106, 138)",
                    fontSize: windowWidth > 500 ? 50 : 36,
                  }}
                >
                  Titrarea acido-bazica
                </div>
                <div
                  style={{
                    width: "100%",
                    fontSize: windowWidth > 500 ? 25 : 18,
                    bottom: 0,
                    color: "rgb(200, 200, 200)",
                  }}
                >
                  Facem știința ușor de înțeles pentru toată lumea
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="section2"
          ref={section2}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100vh",
          }}
        ></div>
        <Footer />
      </div>
    </div>
  );
}

export default Main;
