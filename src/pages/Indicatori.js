import React, { useEffect, useRef, useState } from "react";
import image from "../img/indicatori.jpg";
import image1 from "../img/indicatori.png";
import Footer from "./Footer";
import Nav from "./Nav";
import H3 from "./H3";
function Indicatori() {
  const { homeimage, section1, section2 } = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.scrollY);

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
      <Nav windowHeight={windowHeight} />
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
        <div style={{ display: "block", width: "100%" }}>
          <div
            id="section1"
            ref={section1}
            style={{
              position: "relative",
              overflow: "hidden",
              width: "100%",
              maxHeight: "50vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              left: 0,
              top: 0,
              bottom: 0,
              right: 0,
            }}
          >
            <div
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                zIndex: 11,
                background: "black",
                opacity: 0.7,
              }}
            />
            <div
              style={{
                position: "absolute",
                width: "180px",
                height: "58px",
                zIndex: 12,
                background: "rgb(70,70,70)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  zIndex: 12,
                  left: "-15%",
                  color: "rgb(202, 106, 138)",
                  fontSize: 50,
                }}
              >
                Indicatori
              </div>
            </div>
            <img
              className="normalimage"
              ref={homeimage}
              src={image}
              alt="Image description"
              style={{
                width: "100%",
                height: "100%",
                zIndex: 10,
              }}
            />
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
          }}
        >
          <section
            id="introducere"
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <H3 text={"Indicatori de pH"} />
            <p>
              <b>Indicatorii</b> chimici de culoare sunt <b>acizi</b> sau{" "}
              <b>baze </b> organice <b>slabe </b>
              care au proprietatea de a-și modifica o caracteristica ușor
              sesizabilă(culoarea) atunci când în sistemul chimic se schimbă un
              anumit parametru. Indicatorii chimici de culoare sunt sensibili de
              fapt la concentrația <b>ionilor de hidroniu</b> din sistem, sau
              mai bine zis la <b>nivelul pH-ului</b>.
            </p>
            <p>
              {" "}
              Fiecare indicator este caracterizat de un <b>domeniu de viraj</b>.
              Domeniul de viraj reprezintă treptele sau unitățile de pH la care
              indicatorul începe să reacționeze cu <b>agentul de titrare </b>
              folosit. Domeniul de viraj este de obicei de aproximativ{" "}
              <b>2 unități </b>
              de pH .
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                style={{
                  width: 500,
                }}
                src={image1}
              ></img>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Indicatori;
