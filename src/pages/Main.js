import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import image from "../homepage.jpg";
import Footer from "./Footer";
function Main() {
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
            Punct de echivalență
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
            height: windowWidth > 500 ? "100vh" : "70vh",
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
                display: "flex",
                gap: 10,
                flexDirection: "column",
                zIndex: 2,
                minHeight: windowWidth > 500 ? "200px" : "140px",
                width: "90%",
                top: "32%",
                left: "-38%",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  zIndex: -1,
                  height: "100%",
                  width: "80%",
                  left: "15%",
                  background: "rgb(70,70,70)",
                }}
              />
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
            <h3
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  zIndex: 1,
                  height: "100%",
                  width: "70%",
                  left: "18%",
                  background: "rgb(202, 106, 138)",
                }}
              />
              <div
                style={{
                  position: "relative",
                  zIndex: 2,
                }}
              >
                Ce poti face cu ajutorul titrarii?
              </div>
            </h3>
            <p class="indent4">
              "Motivatia"De la cele mai mici particule, până la cele mai
              complexe combinații, natura din jurul nostru poate fi „descompusă”
              și înțeleasă cu ajutorul chimiei. Acizii și bazele sunt două clase
              de compuși extrem de importante în chimie și evident cu largă
              utilizare industriala, în procese biochimice, etc. Cunoașterea
              concentrației acizilor și bazelor este foarte importantă pentru
              verificarea purității unor substanțe chimice care sunt
              sintetizate, deoarece acestea intrând în compoziția altor
              substanțe (uneori produse farmaceutice) au nevoie de dozaj strict.
            </p>
            <p class="indent4">
              "Pe ce se bazeaza"Metodele volumetrice care urmăresc stabilirea
              concentrației unui acid sau a unei baze într-o soluție dată,
              utilizând pentru aceasta o soluție de bază sau de acid de
              concentrație cunoscută, au la bază reacții de neutralizare. În
              principiu această metodă constă în titrarea unui acid cu o bază.
            </p>
            <p class="indent4">
              Reactia de neutralizare este reactia dintre un acid si o baza, cu
              formare de sare si apa. În soluție apoasă, reacția de
              neutralizare, constă în schimbul de protoni dintre ionii hidroni,
              H3O+ proveniți din ionizarea acidului și hidroxid, HO -proveniți
              din ionizarea bazei.
            </p>
            <p>
              Pentru ca titrare să conducă la un rezultat cât mai exact, trebuie
              să se sesizeze cât mai bine punctul de echivalență.
            </p>
          </section>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Main;
