import React, { useEffect, useRef, useState } from "react";
import image from "../img/indicatori.jpg";
import Footer from "./Footer";
import Nav from "./Nav";
import H3 from "./H3";
import { BlockMath, InlineMath } from "react-katex";
function Pas() {
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
            <H3 text={"Cum începem?"} />
            <p>
              La efectuarea unei titrări se folosește o soluție de{" "}
              <b>concentrație cunoscută</b> pentru a afla concentrația unei alte
              soluții printr-o
              <b> reacție de neutralizare </b> care este monitorizată. Pentru a
              se afla concentrația unei soluții de acid clorhidric dintr-o probă
              , se efectuează o <b>titrare</b> cu o soluție de hidroxid de sodiu
              de concentrație cunoscută.
            </p>
            <p>
              {" "}
              Pentru o titrare acido-bazică este nevoie de numai câteva picături
              de indicator (vom folosi <b>fenolftaleina</b>) în proba de
              concentrație necunoscută. Fenolftaleina în mediu bazic este{" "}
              <b>roșu-carmin</b>, în timp ce în mediu acid este <b>incoloră</b>.
              Efectuăm o titrare acido-bazică cu o soluție de <b>NaOH 0,2 M</b>.
              Așadar, avem <b>soluția de HCl</b> (50 ml) într-un pahar
              Erlenmeyer în care adăugăm <b>2-3 picături</b> de fenolftaleină.
              Deasupra paharului, plasăm biureta care conține soluția de NaOH
              0,2 M. Citim volumul din biuretă la începutul și la finalul
              titrării.
            </p>
            <p>
              <b>Volumul inițial</b> de baza = <b>100 mL</b>.
            </p>
            <H3 text={"Ce se întâmplă?"} />
            <p>
              <b
                style={{
                  fontSize: 23,
                }}
              >
                Efectuăm titrarea
              </b>
              : picurăm NaOH în paharul cu HCl. Amestecăm soluția din pahar cu
              <b> mișcări circulare </b>. Când ne apropiem de{" "}
              <b>punctul de echivalență </b>, soluția din pahar devine roz pal
              acolo unde am picurat NaOH. Când amestecăm, soluția se
              decolorează. Acum trebuie să picurăm cu multă atenție.
            </p>
            <p>
              Când soluția din pahar rămâne <b>roz pal</b> și după agitarea
              paharului, înseamnă că am atins <b>punctul de echivalență</b>. În
              acest moment, toți molii de <InlineMath math="H^{+}" /> prezenți
              în pahar din disocierea HCl în <InlineMath math="H^{+}" /> și{" "}
              <InlineMath math="Cl^{-}" />, au reacționat cu un număr{" "}
              <b>echivalent </b>
              de moli de ioni de hidroxil <InlineMath math="OH^{-}" /> adăugați
              din biuretă. Citim volumul soluției din biuretă care a rămas după
              atingerea punctului de echivalență.
            </p>
          </section>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Pas;
