import React, { useState } from "react";
import { Box, Modal } from "@mui/material";
import Typography from "@mui/material/Typography";
import { InlineMath } from "react-katex";

function AreaButons() {
  const [openCalc, setOpenCalc] = useState(false);
  const [openGuide, setOpenGuide] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          setOpenCalc(true);
        }}
      >
        Click1
      </button>
      <button
        onClick={() => {
          setOpenGuide(true);
        }}
      >
        Click2
      </button>
      <Modal
        className="modal"
        open={openCalc}
        onClose={() => {
          setOpenCalc(false);
        }}
      >
        <Box
          className="modal-box"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 300,
            height: 250,
            padding: 3,
            borderRadius: 8,
            backgroundColor: "black",
            border: "2px solid #000",
            color: "white",
            boxShadow: 24,
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography className="modal-t1" variant="h6" component="h2">
            CALCULE
          </Typography>
          <ol style={{ padding: 0, opacity: 0.7 }}>
            <li>Care e volumul initial de baza?</li>
            <InlineMath math="V_f=" />
            <input></input>
            <li>Click</li>
            <li>Click</li>
            <li>Click</li>
            <li>Click</li>
            <li>Click</li>
          </ol>
        </Box>
      </Modal>
      <Modal
        className="modal"
        open={openGuide}
        onClose={() => {
          setOpenGuide(false);
        }}
      >
        <Box
          className="modal-box"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 300,
            height: 250,
            padding: 3,
            borderRadius: 8,
            backgroundColor: "black",
            border: "2px solid #000",
            color: "white",
            boxShadow: 24,
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            overflow: "scroll",
          }}
        >
          <Typography className="modal-t1" variant="h6" component="h2">
            Pasi efectuati in laborator
          </Typography>
          <ol style={{ width: "100%", paddingLeft: 100, opacity: 0.7 }}>
            <li>Click</li>
            <li>Click</li>
            <li>Click</li>
            <li>Click</li>
            <li>Click</li>
            <li>Click</li>
          </ol>
          <Typography className="modal-t1" variant="h6" component="h2">
            Pasi pe care ii faci aici
          </Typography>
          <ol style={{ width: "100%", paddingLeft: 100 }}>
            <li>Click</li>
            <li>Click</li>
            <li>Click</li>
            <li>Click</li>
            <li>Click</li>
            <li>Click</li>
          </ol>
        </Box>
      </Modal>
    </>
  );
}

export default AreaButons;
