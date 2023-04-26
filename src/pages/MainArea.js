import React, { useEffect, useRef, useState } from "react";
import axiosInstance from "./Axios";
import Circle from "./Circle";
import isTouchingLimits from "./functions";
import getColor from "./ColorsFade";
import { InlineMath } from "react-katex";
import AreaButons from "./AreaButons";

const MainArea = ({ droppedItems, onDrop, onDragOver }) => {
  const [itemStates, setItemStates] = useState({});
  const [acid, setAcid] = useState(0);
  const [baza, setBaza] = useState(0);
  const [buretTouch, setBuretTouch] = useState(false);
  const [erlenTouch, setErlenTouch] = useState(false);
  const [goodToTry, setGoodToTry] = useState(true);
  const [limita, setLimita] = useState({
    left: false,
    right: false,
  });
  const [opacity, setOpacity] = useState(0.7);
  const [colors, setColors] = useState([]);
  const [buretCon, setBuretCon] = useState(0);
  const [buretVol, setBuretVol] = useState(0);
  const [buretSol, setBuretSol] = useState("");
  const [indicator, setIndicator] = useState("");
  const [erlenSol, setErlenSol] = useState("");
  const [buretVer, setBuretVer] = useState(false);
  const [indicatorVer, setIndicatorVer] = useState(false);
  const [erlenVer, setErlenVer] = useState(false);
  const [height, setHeight] = useState(100);
  const [height1, setHeight1] = useState(0);
  let buret,
    erlen,
    buret_stand,
    erlen_stand,
    touchingBuretStand,
    touchingErlenStand;
  async function handleVerify() {
    try {
      const res = await axiosInstance.post("/verify", {
        buretSol: buretSol,
        indicator: indicator,
        erlenSol: erlenSol,
      });
      console.log(res.data);
      setBuretVer(res.data.buret.includes("Yes") ? true : false);
      setIndicatorVer(res.data.indicator.includes("Yes") ? true : false);
      setErlenVer(res.data.erlen.includes("Yes") ? true : false);
      const regex = /\d+/g;
      setColors(res.data.colors.match(regex));
    } catch (e) {
      console.log(e);
    }
  }

  const handleFill = () => {
    let h1 = height1;
    let h = height;
    let buretV = buretVol;
    const intervalId = setInterval(() => {
      setHeight((prevHeight) => {
        if (prevHeight >= 0 && h1 < 100) {
          h1 = h1 + 0.5;
          return prevHeight - 1;
        } else {
          return prevHeight;
        }
      });

      setHeight1((prevHeight) => {
        if (prevHeight <= 100 && h > 0) {
          h = h - 0.5;
          buretV = buretV - 0.5;
          setBuretVol(buretV);
          if (buretV <= 0) {
            console.log("echivalenta");
          }
          return prevHeight + 1;
        } else {
          return prevHeight;
        }
      });
    }, 50);
    document.addEventListener("mouseup", () => {
      clearInterval(intervalId);
    });
  };
  useEffect(() => {
    if (goodToTry) {
      setOpacity(0.5);
      setGoodToTry(false);
    }
  }, [height]);
  const handleMouseDown = (event, id) => {
    setItemStates((prevItemStates) => ({
      ...prevItemStates,
      [id]: {
        ...prevItemStates[id],
        isDragging: true,
        offset: {
          x: event.clientX - prevItemStates[id].position.x,
          y: event.clientY - prevItemStates[id].position.y,
        },
      },
    }));
  };

  const handleMouseMove = (event, id) => {
    const burett = document.getElementById("buret");
    if (burett) {
      buret = burett.getBoundingClientRect();
    }

    const erlenn = document.getElementById("erlen");
    if (erlenn) {
      erlen = erlenn.getBoundingClientRect();
    }

    const burett_stand = document.getElementById("buret-stand");
    if (burett_stand) {
      buret_stand = burett_stand.getBoundingClientRect();
    }

    const erlenn_stand = document.getElementById("erlen-stand");
    if (erlenn_stand) {
      erlen_stand = erlenn_stand.getBoundingClientRect();
    }
    if (burett && burett_stand) {
      touchingBuretStand =
        buret.right >= buret_stand.left &&
        buret.left <= buret_stand.right &&
        buret.bottom >= buret_stand.top &&
        buret.top <= buret_stand.bottom;
    }
    if (erlen && erlen_stand) {
      touchingErlenStand =
        erlen.right >= erlen_stand.left &&
        erlen.left <= erlen_stand.right &&
        erlen.bottom >= erlen_stand.top &&
        erlen.top <= erlen_stand.bottom;
    }
    if (touchingErlenStand && id === "erlen") {
      const area = document.getElementById("area").getBoundingClientRect();
      setErlenTouch(true);
      const newX = erlen_stand.left - area.left;
      const newY = erlen_stand.top - area.top;
      setItemStates((prevItemStates) => ({
        ...prevItemStates,
        [id]: {
          ...prevItemStates[id],
          position: {
            x: newX - 49,
            y: newY - 132,
          },
        },
      }));
    } else {
      setErlenTouch(false);
    }
    if (touchingBuretStand && id === "buret") {
      const area = document.getElementById("area").getBoundingClientRect();
      setBuretTouch(true);
      const newX = buret_stand.left - area.left;
      const newY = buret_stand.top - area.top;
      setItemStates((prevItemStates) => ({
        ...prevItemStates,
        [id]: {
          ...prevItemStates[id],
          position: {
            x: newX - 95,
            y: newY - 215,
          },
        },
      }));
    } else {
      setBuretTouch(false);
    }
    if (!itemStates[id].isDragging) return;
    setItemStates((prevItemStates) => ({
      ...prevItemStates,
      [id]: {
        ...prevItemStates[id],
        position: {
          x: event.clientX - prevItemStates[id].offset.x,
          y:
            itemStates?.erlen?.isFixed &&
            itemStates?.buret?.isFixed &&
            id === "erlen"
              ? 457.5
              : event.clientY - prevItemStates[id].offset.y,
        },
      },
    }));
  };
  useEffect(() => {
    if (itemStates?.erlen?.isFixed && itemStates?.buret?.isFixed) {
      console.log("congrats");
    }
  }, [itemStates?.erlen?.isFixed, itemStates?.buret?.isFixed]);

  const handleMouseUp = (event, id) => {
    setItemStates((prevItemStates) => ({
      ...prevItemStates,
      [id]: {
        ...prevItemStates[id],
        isDragging: false,
        isFixed:
          id === "buret" && buretTouch
            ? true
            : id === "erlen" && erlenTouch
            ? true
            : false,
      },
    }));
  };

  let handleDragStart = (e, id) => {
    e.dataTransfer.setData("text/plain", id);
  };

  useEffect(() => {
    const newItemStates = {};
    droppedItems.forEach((item) => {
      newItemStates[item.id] = {
        position: { x: 0, y: 0 },
        offset: { x: 0, y: 0 },
        isDragging: false,
      };
    });
    setItemStates(newItemStates);
  }, [droppedItems]);

  const erlenRef = useRef(null);
  const limit1Ref = useRef(null);
  const limit2Ref = useRef(null);

  function handleErlenMovement() {
    let limit = isTouchingLimits(
      erlenRef.current,
      limit1Ref.current,
      limit2Ref.current
    );
    if (limit === 1) {
      limita.left = true;
      limita.right = false;
    } else if (limit === 2) {
      limita.left = false;
      limita.right = true;
    } else {
      limita.left = false;
      limita.right = false;
    }
  }
  useEffect(() => {
    if (opacity <= 0) {
      setGoodToTry(true);
    } else {
      setOpacity(opacity - 0.02);
      setGoodToTry(false);
    }
  }, [limita.left, limita.right]);
  function handleInputChange(event) {
    const parse = parseInt(event.target.value);
    setHeight(parse);
  }
  function handleInputChange1(event) {
    const parse = parseInt(event.target.value);
    setHeight1(parse);
    setBuretVol((parse * 0.1) / buretCon);
    setBaza((parse * 0.1) / buretCon);
    setAcid(parse);
  }
  function handleBuretCon(event) {
    const parse = parseFloat(event.target.value);
    setBuretCon(parse);
    setBuretVol((height1 * 0.1) / parse);
    setBaza((height1 * 0.1) / parse);
  }
  function handleBuretSol(event) {
    setBuretSol(event.target.value);
  }
  function handleErlenSol(event) {
    setErlenSol(event.target.value);
  }
  function handleIndicator(event) {
    setIndicator(event.target.value);
  }
  return (
    <div
      id="area"
      style={{
        width: "100vh",
        height: "80vh",
        position: "relative",
        borderRadius: 20,
        border: "solid",
      }}
      onDrop={onDrop}
      onDragOver={onDragOver}
    >
      <AreaButons />
      {droppedItems.map((item) => (
        <div key={item.id}>
          <div
            className={item.id}
            id={item.id}
            ref={item.id === "erlen" ? erlenRef : null}
            style={{
              position: "absolute",
              top: item.id === "stand" ? 60 : itemStates[item.id]?.position.y,
              left:
                item.id === "stand"
                  ? item.left
                  : itemStates[item.id]?.position.x,
              cursor: item.id !== "stand" ? "move" : null,
            }}
            onDragStart={(e) => handleDragStart(e, item.id)}
            draggable={item.id === "stand" ? "true" : "false"}
            onMouseDown={(e) => handleMouseDown(e, item.id)}
            onMouseMove={(e) => {
              handleMouseMove(e, item.id);
              if (itemStates?.erlen?.isFixed && itemStates?.buret?.isFixed) {
                handleErlenMovement();
              }
            }}
            onMouseUp={(e) => handleMouseUp(e, item.id)}
          >
            {item.id === "stand" ? (
              <>
                <div
                  id="stand-values"
                  style={{
                    height: "100%",
                    width: 135,
                    position: "absolute",
                    top: 0,
                    left: -125,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    gap: 10,
                  }}
                >
                  <input
                    id="buret-value"
                    placeholder="Baza"
                    value={buretSol}
                    onChange={handleBuretSol}
                    style={{
                      height: 30,
                      width: "100%",
                      background: buretVer && buretSol !== "" ? "green" : null,
                    }}
                  />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                      gap: 10,
                    }}
                  >
                    <InlineMath math="V_{baza}"></InlineMath>
                    <input
                      id="buret-nr-value"
                      type="number"
                      min="0"
                      max="100"
                      value={height}
                      onChange={handleInputChange}
                      style={{
                        height: 20,
                        width: "45%",
                      }}
                    />
                    <span>ml</span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                      gap: 10,
                    }}
                  >
                    <InlineMath math="c_M"></InlineMath>
                    <input
                      id="buret-nr-con"
                      type="number"
                      min="0"
                      max="1"
                      step="0.05"
                      value={buretCon}
                      onChange={handleBuretCon}
                      style={{
                        height: 20,
                        width: "50%",
                      }}
                    />
                    <span>mol/L</span>
                  </div>
                  <input
                    id="indicator-value"
                    placeholder="Indicator"
                    value={indicator}
                    onChange={handleIndicator}
                    style={{
                      height: 30,
                      width: "100%",
                      background:
                        indicatorVer && indicator !== "" ? "green" : null,
                    }}
                  />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                      gap: 10,
                    }}
                  >
                    <InlineMath math="V_{acid}"></InlineMath>
                    <input
                      id="erlen-nr-value"
                      type="number"
                      min="0"
                      max="100"
                      value={height1}
                      onChange={handleInputChange1}
                      style={{
                        height: 20,
                        width: "40%",
                      }}
                    />
                    <span>ml</span>
                  </div>
                  <input
                    id="erlen-value"
                    placeholder="Acid"
                    value={erlenSol}
                    onChange={handleErlenSol}
                    style={{
                      height: 30,
                      width: "100%",
                      background: erlenVer && erlenSol !== "" ? "green" : null,
                    }}
                  />
                  <button
                    id="verify"
                    onClick={handleVerify}
                    style={{
                      height: 20,
                      width: "90%",
                    }}
                  />
                </div>
                <div
                  id="buret-stand"
                  style={{
                    height: 50,
                    width: 20,
                    position: "absolute",
                    top: 170,
                    left: 260,
                  }}
                />
                {itemStates?.erlen?.isFixed && itemStates?.buret?.isFixed && (
                  <div
                    style={{
                      height: 55,
                      width: 20,
                      position: "absolute",
                      top: 260,
                      left: 283,
                      zIndex: 10,
                      cursor: "pointer",
                    }}
                    //onMouseDown={buretVer && indicatorVer && erlenVer ? handleFill : null}
                    onMouseDown={handleFill}
                  >
                    <b
                      style={{
                        height: 50,
                        width: 100,
                        position: "absolute",
                        cursor: "pointer",
                        left: 40,
                        top: 20,
                      }}
                    >
                      &larr; Click here
                    </b>
                  </div>
                )}
                <div
                  id="erlen-stand"
                  style={{
                    height: 50,
                    width: 50,
                    position: "absolute",
                    top: "88%",
                    left: "57%",
                  }}
                >
                  <div
                    id="limit1"
                    ref={limit1Ref}
                    style={{
                      height: 40,
                      width: 5,
                      position: "absolute",
                      left: -30,
                    }}
                  />
                  <div
                    id="limit2"
                    ref={limit2Ref}
                    style={{
                      height: 40,
                      width: 5,
                      position: "absolute",
                      left: 80,
                    }}
                  />
                </div>
              </>
            ) : null}
          </div>
          {item.id === "buret" ? (
            <>
              <div
                id="buret-fill-100"
                style={{
                  height: 245,
                  width: 19,
                  position: "absolute",
                  top: itemStates[item.id]?.position.y + 38,
                  left: itemStates[item.id]?.position.x + 94,
                  display: "flex",
                  alignItems: "flex-end",
                }}
              >
                <div
                  id="buret-fill"
                  style={{
                    borderTop: "solid 1px",
                    backgroundColor: "rgb(0,200,255)",
                    height: `${height}%`,
                    width: "100%",
                  }}
                ></div>
              </div>
              <div
                id="buret-fill-100"
                style={{
                  height: 155,
                  width: 2.5,
                  position: "absolute",
                  top: itemStates[item.id]?.position.y + 353.3,
                  left: itemStates[item.id]?.position.x + 103,
                  zIndex: 2,
                }}
              >
                <div
                  id="buret-fill"
                  style={{
                    backgroundColor: "rgb(0,200,255)",
                    height: "10%",
                    width: "100%",
                  }}
                ></div>
              </div>
            </>
          ) : item.id === "erlen" ? (
            <>
              <div
                id="erlen-fill-100"
                style={{
                  height: 100,
                  width: 115,
                  position: "absolute",
                  top: itemStates[item.id]?.position.y + 78,
                  left: itemStates[item.id]?.position.x,
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "center",
                }}
              >
                <div
                  id="erlen-fill"
                  style={{
                    backgroundColor: `rgb(${getColor(
                      height1,
                      acid,
                      baza,
                      colors
                    )})`,
                    borderTop: "solid",
                    borderWidth: 0.4,
                    height: `${height1}%`,
                    width: "97%",
                    display: "flex",
                    justifyContent: "center",
                    overflow: "hidden",
                    zIndex: -15,
                  }}
                >
                  <Circle
                    radius={100}
                    getOpacity={opacity}
                    numCircles={Math.floor(height1 / 2)}
                    c={colors}
                  />
                </div>
              </div>
            </>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default MainArea;
