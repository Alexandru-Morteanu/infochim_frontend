import React, { useState } from 'react'
import { useEffect } from 'react';
  
const MainArea = ({ droppedItems, onDrop, onDragOver, height }) => {
    const [itemStates, setItemStates] = useState({});
    const [color, setColor] = useState(255);
    useEffect(()=>{
        setColor(255-height)
    },[height])
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
         let  buret, erlen, buret_stand, erlen_stand, touchingBuretStand, touchingErlenStand;
         
         const burett = document.getElementById("buret")
         if(burett){
            buret = burett.getBoundingClientRect();
         }

         const erlenn = document.getElementById("erlen")
         if(erlenn){
            erlen = erlenn.getBoundingClientRect();
         }

         const burett_stand = document.getElementById("buret-stand");
         if(burett_stand){
            buret_stand = burett_stand.getBoundingClientRect();
         }
         
         const erlenn_stand = document.getElementById("erlen-stand")
         if(erlenn_stand){
            erlen_stand = erlenn_stand.getBoundingClientRect();
         }
         if(burett && burett_stand){
            touchingBuretStand =
                buret.right >= buret_stand.left &&
                buret.left <= buret_stand.right &&
                buret.bottom >= buret_stand.top &&
                buret.top <= buret_stand.bottom;
         }
         if(erlen && erlen_stand){
            touchingErlenStand =
                erlen.right >= erlen_stand.left &&
                erlen.left <= erlen_stand.right &&
                erlen.bottom >= erlen_stand.top &&
                erlen.top <= erlen_stand.bottom;
         }
         if(touchingErlenStand && id === "erlen"){
            const standCenterX = erlen_stand.left + erlen_stand.width / 2;
            const standCenterY = erlen_stand.top + erlen_stand.height / 2;

            const newX = standCenterX - erlen.width / 2;
            const newY = standCenterY - erlen.height / 2;
            setItemStates((prevItemStates) => ({
                ...prevItemStates,
                [id]: {
                  ...prevItemStates[id],
                  position: {
                    x: newX-71,
                    y: newY-28
                  },
                },  
                }
              ));
         }
         if(touchingBuretStand && id === "buret"){
            const standCenterX = buret_stand.left + buret_stand.width / 2;
            const standCenterY = buret_stand.top + buret_stand.height / 2;

            const newX = standCenterX - buret.width / 2;
            const newY = standCenterY - buret.height / 2;
            setItemStates((prevItemStates) => ({
                ...prevItemStates,
                [id]: {
                  ...prevItemStates[id],
                  position: {
                    x: newX-62,
                    y: newY-35
                  },
                },  
                }
              ));
         }
         if (!itemStates[id].isDragging) return;
         setItemStates((prevItemStates) => ({
                ...prevItemStates,
                [id]: {
                  ...prevItemStates[id],
                  position: {
                    x: event.clientX - prevItemStates[id].offset.x,
                    y: event.clientY - prevItemStates[id].offset.y,
                  },
                },
              }));
    };
  
    const handleMouseUp = (event, id) => {
      setItemStates((prevItemStates) => ({
        ...prevItemStates,
        [id]: {
          ...prevItemStates[id],
          isDragging: false,
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
  
    return (
      <div
        style={{
          width: "500px",
          height: "500px",
          border: "1px solid black",
          position: "relative",
        }}
        onDrop={onDrop}
        onDragOver={onDragOver}
      >
        {droppedItems.map((item) => 
        (
            <div key={item.id}>
          <div
            className={item.id}
            id={item.id}
            style={{
              position: "absolute",
              top: item.id === "stand" ? 170 : itemStates[item.id]?.position.y,
              left: item.id === "stand" ? item.left : itemStates[item.id]?.position.x,
              cursor: item.id !== "stand" ? "move" : null,
            }}
            onDragStart={(e) => handleDragStart(e, item.id)}
            draggable={item.id === "stand" ? "true" : "false"}
            onMouseDown={(e) => handleMouseDown(e, item.id)}
            onMouseMove={(e) => handleMouseMove(e, item.id)}
            onMouseUp={(e) => handleMouseUp(e, item.id)}
          >
            {item.id === "stand" ? (
                <>
                    <div
                        id="buret-stand"
                        style={{
                        height: 50,
                        width: 20,
                        position: "absolute",
                        top: 80,
                        left: 139,
                        }}
                    />
                    <div
                        id="erlen-stand"
                        style={{
                        height: 50,
                        width: 50,
                        position: "absolute",
                        top: 270,
                        left: 124,
                        }}
                    />
                </>
            ) : null}
          </div>
          {item.id === "buret"?(
            <>
                <div
                        id="buret-fill-100"
                        style={{
                        height: 167,
                        width: 13.5,
                        position: "absolute",
                        top: itemStates[item.id]?.position.y + 26,
                        left:itemStates[item.id]?.position.x + 64,
                        display:"flex",
                        alignItems:"flex-end"
                        }}
                    >
                        <div
                        id="buret-fill"
                        style={{
                        backgroundColor:"rgb(0,200,255)",
                        height: `${height}%`,
                        width: "100%"
                        }}
                    ></div>
                </div>
                <div
                        id="buret-fill-100"
                        style={{
                        height: 155,
                        width: 2,
                        position: "absolute",
                        top: itemStates[item.id]?.position.y + 241,
                        left:itemStates[item.id]?.position.x + 70,
                        zIndex:2
                        }}
                    >
                        <div
                        id="buret-fill"
                        style={{
                        backgroundColor:"rgb(0,200,255)",
                        height: "10%",
                        width: "100%"
                        }}
                    ></div>
                </div>
            </>): item.id === "erlen"?(
            <>
                <div
                        id="erlen-fill-100"
                        style={{
                        height: 57,
                        width: 65,
                        position: "absolute",
                        top: itemStates[item.id]?.position.y+43,
                        left:itemStates[item.id]?.position.x,
                        display:"flex",
                        alignItems:"flex-end"
                        }}
                    >
                        <div
                        id="erlen-fill"
                        style={{
                        backgroundColor:`rgb(${color},200,255)`,
                        height: `${100-height}%`,
                        width: "100%"
                        }}
                    ></div>
                </div>
            </>):null}
            </div>
        )
        )}
      </div>
    );
  };
  
  
function Gravity() {
  const [droppedItems, setDroppedItems] = useState([]);

  const handleDragStart = (e, id) => {
    e.dataTransfer.setData("text/plain", id);
    console.log(id)
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("text/plain");
    const left = e.clientX - e.target.offsetLeft - 25;
    const top = e.clientY - e.target.offsetTop - 25;
    const index = droppedItems.findIndex(item => item.id === id);
    if (index >= 0) {
      const updatedItems = [...droppedItems];
      updatedItems[index] = { id, left, top };
      setDroppedItems(updatedItems);
    } else {
      const newItems = [...droppedItems, { id, left, top }];
      setDroppedItems(newItems);
    }
  };
  const handleDragOver = (e) => {
    e.preventDefault();
  };
  const [height, setHeight] = useState(100);

  const handleMouseDown = () => {
    const intervalId = setInterval(() => {
      setHeight((prevHeight) => (prevHeight > 0 ? prevHeight - 1 : 0));
    }, 50);

    document.addEventListener("mouseup", () => {
      clearInterval(intervalId);
    });
  };
  return (
    <div style={{ display: "flex" }}>
      <div style={{ display: "flex",alignItems:'center',flexDirection:'column' }}>
        <div className="stand" draggable="true" onDragStart={(e)=>handleDragStart(e,"stand")} style={{height: 90, width: 70}} />
        <div className="buret" draggable="true" onDragStart={(e)=>handleDragStart(e,"buret")} style={{height: 100, width: 50}}/>
        <div className="erlen" draggable="true" onDragStart={(e)=>handleDragStart(e,"erlen")} style={{height: 60, width: 40}}/>
      </div>
      <MainArea droppedItems={droppedItems} onDrop={handleDrop} onDragOver={handleDragOver} height={height} />
      <button
      onMouseDown={handleMouseDown}
      ></button>
    </div>
  )
}

export default Gravity