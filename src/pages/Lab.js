import React, { useState } from "react";
import MainArea from "./MainArea";
import Nav from "./Nav.js";
function Lab() {
  const [droppedItems, setDroppedItems] = useState([]);

  const handleDragStart = (e, id) => {
    e.dataTransfer.setData("text/plain", id);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("text/plain");
    const left = e.clientX - e.target.offsetLeft - 25;
    const top = e.clientY - e.target.offsetTop - 25;
    const index = droppedItems.findIndex((item) => item.id === id);
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
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        width: "100%",
        marginTop: "10vh",
        height: "90vh",
      }}
    >
      <Nav fill={true}></Nav>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          borderRadius: 20,
          border: "solid",
          padding: 20,
        }}
      >
        <div
          className="stand"
          draggable="true"
          onDragStart={(e) => handleDragStart(e, "stand")}
          style={{ height: 90, width: 70 }}
        />
        <div
          className="buret"
          draggable="true"
          onDragStart={(e) => handleDragStart(e, "buret")}
          style={{ height: 100, width: 50 }}
        />
        <div
          className="erlen"
          draggable="true"
          onDragStart={(e) => handleDragStart(e, "erlen")}
          style={{ height: 60, width: 40 }}
        />
      </div>
      <MainArea
        droppedItems={droppedItems}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      />
    </div>
  );
}

export default Lab;
