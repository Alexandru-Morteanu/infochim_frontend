import React, { useEffect, useRef, useState } from "react";
import image from "../indicatori.jpg";
import Footer from "./Footer";
import Nav from "./Nav";
import { BlockMath, InlineMath } from 'react-katex';
function Pas() {
  const { homeimage, section1, section2 } = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.scrollY);
  const config = {
    tex2jax: {
      inlineMath: [["$", "$"]],
      displayMath: [["$$", "$$"]]
    }
  };

  const equation = "$(a+b)^2$";
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
                width: "190px",
                height: "58px",
                zIndex: 12,
                background: "rgb(70,70,70)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  width: "120%",
                  height: "100%",
                  zIndex: 12,
                  left: "-15%",
                  color: "rgb(202, 106, 138)",
                  fontSize: 50,
                }}
              >
                Pas cu Pas
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
          <section id="introducere">
            <h3>Cum incepem?</h3>
            <p >
              La efectuarea unei titrări se folosește o soluție de concentrație
              cunoscută pentru a afla concentrația unei alte soluții printr-o
              reacție de neutralizare care este monitorizată. Pentru a se afla
              concentrația unei soluții de acid clorhidricdintr-o probă
              necunoscută, se efectuează o titrare cu o soluție de hidroxid de
              sodiude concentrație cunoscută.Pentru o titrare acido-bazică este
              nevoie de numai câteva picături de indicator (vom folosi
              fenolftaleina) în proba de concentrație necunoscută. Fenolftaleina
              in mediu bazic este rosu-carmin, in timp ce in mediu acid este
              incolora. Efectuăm o titrare acido-bazică cu o soluție de NaOH
              0,15 M. Așadar, avem soluția de HCl (50 mL) într-un pahar
              Erlenmeyer în care adăugăm 2-3 picături de fenolftaleină. Deasupra
              paharului, plasăm biureta care conține soluția de NaOH 0,15 M.
              Citim volumul din biuretă la începutul și la finalul titrării.
              Volumul initial de baza= 0,1 mL
            </p>
            <h3>Ce se intampla?</h3>
            <p>
              Efectuăm titrarea: picurăm NaOH în paharul cu HCl. Amestecăm
              soluția din pahar cu mișcări circulare.Când ne apropiem de punctul
              de echivalență, soluția din pahar devine roz pal acolo unde am
              picurat NaOH. Când amestecăm, solutia se decoloreaza. Acum trebuie
              să picurăm cu multă atenție. Când soluția din pahar rămâne roz pal
              și după agitarea paharului, înseamnă ca am atins punctul de
              echivalență. In acest moment, toti molii de H+ prezenti in pahar
              din disocierea HCl in H+ si Cl-, au reactionat cu un numar
              echivalent de moli de ioni de hidroxil OH- adaugati din biureta.
              Citim volumul soluției din biuretă care a ramasdupa atingerea
              punctului de echivalenta.
            </p>
            <div>
              <h3 >Calcule</h3>
              <p>
                Determinam volumul de NaOH consumat prin diferenta.
              </p>
              <InlineMath math="V_{NaOH}=V_{f}-V_{i}=33,5-0,1=33,4ml=0,0334L"></InlineMath>
              <p>
                Calculam numarul de moli de NaOH existenti in solutia bazica.
              </p>
              <InlineMath math="c_M=\frac{\nu}{V}=>\nu_{NaOH}=c_M\cdot V "></InlineMath>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Pas;
