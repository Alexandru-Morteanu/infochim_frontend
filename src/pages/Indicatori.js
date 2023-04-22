import React, { useEffect, useRef, useState } from "react";
import image from "../indicatori.jpg";
import Footer from "./Footer";
import Nav from "./Nav";
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
          <section id="introducere">
            <h3>Introducere</h3>
            <p class="indent4">
              <b>Istoria-Medicinei</b> se ocupă atât cu studiul evoluției
              medicinei ca știință cât și cu studiul personalităților care se
              remarcă în acest domeniu pe parcursul istoriei.
            </p>
            <p class="indent4">
              {" "}
              Aceasta a început odată cu descoperirea plantelor medicinale de
              către oameni și utilizarea acestora împotriva bolilor și a
              rănilor.
            </p>
            <p class="indent4">
              Medicina tradițională a fost practicată de mai multe civilizații
              vechi, cum ar fi cele egiptene, grecești și romane. Aceste
              civilizații au dezvoltat o serie de tehnici de tratament, cum ar
              fi utilizarea plantelor medicinale și a chirurgiei. De asemenea,
              au fost dezvoltate teorii medicale care explicau boala și modul de
              tratare a acesteia.
            </p>
            <p class="indent4">
              În Evul Mediu, medicina a fost dominată de ideile Aristotelice și
              ale lui Galen, care au fost acceptate ca fiind adevărate timp de
              mai multe secole. În secolul al XVIII-lea, însă, au început să
              apară noi idei și teorii medicale, ca rezultat al progreselor în
              chimie și fizică. Acest lucru a condus la dezvoltarea medicinei
              moderne, care se bazează pe principiile științifice și pe metodele
              de tratare a bolilor care sunt dovedite clinic.
            </p>
            <p class="txtaligncenter"></p>
            <h3>Aristotel și Galen</h3>
            <h2 class="txtaligncenter">Aelius Galenus</h2>
            <p class="indent4">
              <b>Aelius Galenus</b> a trăit între anii 129 și 200 sau 216 fiind
              născut la Pregam și locuind în capitala Imperiului Roman unde avea
              să stea până la moartea sa. Acesta a fost ultimul mare medic al
              Antichității având o influență timp de peste un mileniu asupra
              medicinii ebraice, creștine și musulmane, el fiind considerat unul
              dintre fondatorii anatomiei și farmacologiei.
            </p>
            <div class="mgtop">
              <h2 class="txtaligncenter">Aristotel</h2>
              <p class="indent4">
                <b>Aristotel</b> s-a născut în 384 î.Hr. și a murit pe data de 7
                martie 322 î.Hr. Acesta a fost unul dintre cei mai importanți
                filosofi ai Greciei Antice. Acesta a contribuit la dezvoltarea
                medicinii prin observațiile și cercetările sale în domeniul
                anatomiei, fiziologiei și patologiei. El a studiat diferite
                animale și a observat modul în care organismele funcționează și
                se dezvoltă. Aristotel a clasificat animalele în funcție de
                caracteristicile lor anatomice și comportamentale și a
                identificat legături între structura corpului și funcțiile
                acestuia. El a observat că inima este organul principal
                responsabil pentru circulația sângelui și a descris structura și
                funcțiile sale.
              </p>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Indicatori;
