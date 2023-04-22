import React, { useEffect, useRef, useState } from "react";
import image from "../indicatori.jpg";
import Footer from "./Footer";
import Graphic from "./Graphic";
import Nav from "./Nav";
function PH() {
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
                width: "65px",
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
                pH
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
            height: "100vh",
          }}
        >
          <section id="introducere">
            <h3>PH</h3>
            <p class="indent4">
              Punctul final al titrării este numit punct de echivalență și este
              punctul la care întreaga cantitate de acid sau bază a fost
              transformată în sare. Sesizarea punctului de echivalență se poate
              face măsurând pH-ul soluției cu ajutorul pH-metrului (titrarea se
              oprește cand pH=7), sau cu ajutorul indicatorilor acido-bazici
              (substanțe care își schimbă culoarea în funcție de valoarea
              concentrației ionilor de hidrogen din soluție). Schimbarea culorii
              indicatorului nu se produce la un anumit pH, ci interval de pH,
              numit domeniu de viraj. Deoarece indicatorii sunt acizi slabi sau
              baze slabe, ei se adaugă în cantități mici pentru a nu modifica
              pH-ul soluției.
            </p>
            <Graphic></Graphic>
          </section>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default PH;
