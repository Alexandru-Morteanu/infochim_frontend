import React, { useEffect, useRef, useState } from "react";
import image from "../img/indicatori.jpg";
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
          }}
        >
          <section id="introducere">
            <h3>Ce este pH-ul?</h3>
            <p>
              <b>&rarr;</b> <b>ph-ul</b> (puterea de hidrogen) reprezintă
              logaritmul zecimal cu semn schimbat al concentrației ionilor
              hidroniu dintr-o soluție, indicând caracterul acid sau bazic al
              acesteia.
            </p>
            <p style={{ display: "flex", justifyContent: "center" }}>
              pH = – lg[H3O+]
            </p>
            <p>
              <b>&rarr;</b> <b>ph-ul</b> mai poate fi definit şi astfel: pH-ul
              unei soluţii este egal cu puterea cu semn schimbat a concentraţiei
              molare a ionilor de hidroniu.
            </p>

            <p style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              [H3O+] = 10-pH
            </p>
            <h3>Cum este pH-ul în diferite medii?</h3>
            <p>
              În soluţii <b>acide</b>: concentraţia ionilor hidroniu este mai
              mare decât concentraţia ionilor hidroxil.
            </p>
            <p style={{ display: "flex", justifyContent: "center" }}>
              [H3O+] {">"} [HO-]
            </p>
            <p>
              În soluţii <b>neutre</b>: concentraţia ionilor hidroniu este egală
              cu concentraţia ionilor hidroxil.
            </p>
            <p style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              [H3O+] = [HO-]{" "}
            </p>
            <p>
              În soluţii <b>bazice</b>: concentraţia ionilor hidroniu este mai
              mică decât concentraţia ionilor hidroxil.{" "}
            </p>
            <p style={{ display: "flex", justifyContent: "center" }}>
              [H3O+] {"<"} [HO-]
            </p>
            <p>
              Când <b>creşte</b> concentraţia de protoni din soluţie, pH-ul{" "}
              <b>scade</b>, iar când <b>scade</b> concentraţia de protoni din
              soluţie, pH-ul <b>creşte</b>.
            </p>
            <h3>Ce este scala de pH?</h3>
            <p>
              <b>Scala de pH</b> măsoară cât de acidă sau cât de bazică este o
              substanţă. Scala de pH cuprinde valori de la <b>0 la 14</b>, cu
              valorile între <b>0 şi 7</b> aparţînând <b>acizilor</b>, şi
              valorile între
              <b> 7 şi 14</b> aparţînând <b>bazelor</b>. Valoarea pH-ului apei
              pure, 7, este baza scalei de pH.
            </p>
            <p style={{ display: "flex", justifyContent: "center" }}>
              {"Acizi: pH < 7"}
            </p>
            <p style={{ display: "flex", justifyContent: "center" }}>
              {"Baze: pH > 7"}
            </p>
            <p>
              <b>Acizii țări</b> (disociază total în soluție) au, în general, pH
              foarte scăzut. <b>Acizii slabi</b> (disociază incomplet în
              soluție) au valori de pH de la 4 la 6. <b> Bazele țări</b> au pH
              foarte ridicat.
              <b> Bazele slabe</b> au, de obicei, pH-ul între 8 şi 11.
            </p>
            <p>
              Teoretic, <b>pH-ul neutru</b> este considerat că fiind pH=7.
              Practic, sunt considerate că fiind <b>neutre</b> toate soluţiile
              care au pH-ul între 6 şi 8.
            </p>
            <p>
              Punctul final al titrării este numit <b>punct de echivalență </b>
              și este punctul la care <b>întreaga</b> cantitate de acid sau bază
              a fost transformată în <b>sare</b>.
            </p>
            <h3>Cum sesizam punctul de echivalenta?</h3>
            <p>
              <b>Sesizarea</b> punctului de echivalență se poate face măsurând
              pH-ul soluției cu ajutorul
              <b> pH-metrului</b> (titrarea se oprește când pH=7), sau cu
              ajutorul
              <b> indicatorilor acido-bazici</b> (substanțe care își schimbă
              culoarea în funcție de valoarea concentrației ionilor de hidrogen
              din soluție).
            </p>
            <p>
              <b>Schimbarea culorii indicatorului</b> nu se produce la un anumit
              pH, ci <b>interval</b> de pH, numit <b>domeniu de viraj</b>.
              Deoarece indicatorii sunt acizi slabi sau baze slabe, ei se adaugă
              în <b>cantități mici</b> pentru a nu modifica pH-ul soluției.
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
