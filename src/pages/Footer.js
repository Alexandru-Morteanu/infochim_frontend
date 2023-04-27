import React from "react";
import * as Scroll from "react-scroll";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

function Footer() {
  return (
    <footer
      style={{
        width: "100%",
      }}
    >
      <div
        className="footer"
        style={{
          padding: 20,
          textAlign: "center",
          background: "rgb(32, 32, 32)",
        }}
      >
        <div
          style={{
            width: "100%",
            height: 30,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Link to={"introducere"} offset={-100}>
            <div
              style={{
                width: 30,
                height: 25,
                background: "white",
                borderRadius: 10,
                cursor: "pointer",
              }}
            >
              <div>^</div>
            </div>
          </Link>
        </div>
        <h2
          className="bibliografiecss"
          style={{
            textDecoration: "none",
            padding: 5,
            marginTop: 10,
            color: "white",
          }}
        >
          Bibliografie:
        </h2>

        {[
          {
            href: "https://ro.wikipedia.org/wiki/Istoria_medicinei",
            text: "Wikipedia",
          },
          {
            href: "https://www.scientia.ro/stiinta-la-minut/48-scurta-istorie-descoperiri-stiintifice/1363-medicina-in-evul-mediu.html",
            text: "Scientia",
          },
          {
            href: "https://www.pirasan.ro/medicina-traditionala-egipteana/",
            text: "Pirasan",
          },
          {
            href: "https://portalmed.ro//istoria-medicinei/medicina-in-evul-mediu/",
            text: "Portalmed",
          },
          {
            href: "https://historia.ro/sectiune/general/barbierii-chirurgi-mestesugarii-cu-atestat-ai-569968.html",
            text: "Historia",
          },
          {
            href: "https://www.wikiwand.com/ro/Medicină",
            text: "Wikiwand",
          },
        ].map(({ href, text }, index) => (
          <a
            key={index}
            style={{
              textDecoration: "none",
              padding: 5,
              marginTop: 10,
              color: "white",
            }}
            href={href}
          >
            {text}
          </a>
        ))}
        <br></br>
        <br></br>
        <a>
          <b
            style={{
              textDecoration: "none",
              padding: 5,
              marginTop: 10,
              color: "white",
            }}
          >
            ©Morteanu
          </b>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
