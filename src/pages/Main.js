import React, { useEffect, useRef, useState } from "react";
import image from "../homepage.jpg";
function Main() {
  const { homeimage, section1, section2 } = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div
      id="container"
      style={{
        width: "100%",
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
          height: "100%",
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
              height: "90%",
              width: "60%",
              fontSize: 50,
              top: "25%",
              display: "flex",
              gap: 10,
              left: "-10%",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                width: "100%",
                fontSize: windowWidth > 500 ? 35 : 25,
              }}
            >
              Titrarea acido-bazica
            </div>
            <div
              style={{
                width: "100%",
                fontSize: windowWidth > 500 ? 20 : 15,
                bottom: 0,
              }}
            >
              Facem știința ușor de înțeles pentru toată lumea
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
    </div>
  );
}

export default Main;
