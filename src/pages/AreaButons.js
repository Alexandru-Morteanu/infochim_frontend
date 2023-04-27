import React, { useState } from "react";
import { Box, Modal } from "@mui/material";
import Typography from "@mui/material/Typography";
import { InlineMath } from "react-katex";

function AreaButons() {
  const [openCalc, setOpenCalc] = useState(false);
  const [openGuide, setOpenGuide] = useState(false);
  const [vf, setVf] = useState(0);
  const [vi, setVi] = useState(0);
  const [acid, setAcid] = useState(0);
  const [cm, setCm] = useState(0);
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          width: "100%",
        }}
      >
        <div
          id="calcule"
          onClick={() => {
            setOpenCalc(true);
          }}
        ></div>
        <div
          id="guide"
          onClick={() => {
            setOpenGuide(true);
          }}
        ></div>
      </div>
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
            width: 350,
            height: 400,
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
            CALCULE
          </Typography>
          <ol style={{ width: "80%", padding: 0, opacity: 0.7 }}>
            <li>Care e volumul initial de baza?</li>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <InlineMath math="V_i=" />
              <input
                type="number"
                min="0"
                max="100"
                value={vi}
                onChange={(e) => {
                  const parse = parseFloat(e.target.value);
                  setVi(parse);
                }}
                style={{
                  marginLeft: 10,
                  height: 20,
                  width: "20%",
                }}
              />
            </div>
            <li>Care e volumul final de baza?</li>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <InlineMath math="V_f=" />
              <input
                type="number"
                min="0"
                max="100"
                value={vf}
                onChange={(e) => {
                  const parse = parseFloat(e.target.value);
                  setVf(parse);
                }}
                style={{
                  marginLeft: 10,
                  height: 20,
                  width: "20%",
                }}
              />
            </div>
            <li>Atunci volumul de baza reactionat: </li>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <InlineMath math={`V_{baza}= V_i-V_f= ${vi - vf} ml`} />
            </div>
            <li>Care e volumul initial de Acid?</li>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <InlineMath math="V_{acid}= " />
              <input
                type="number"
                min="0"
                max="100"
                value={acid}
                onChange={(e) => {
                  const parse = parseFloat(e.target.value);
                  setAcid(parse);
                }}
                style={{
                  marginLeft: 10,
                  height: 20,
                  width: "20%",
                }}
              />
            </div>
            <li>Care e concentratia molara a bazei?</li>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <InlineMath math="c_{M(baza)}= " />
              <input
                type="number"
                min="0"
                max="1"
                step={0.05}
                value={cm}
                onChange={(e) => {
                  const parse = parseFloat(e.target.value);
                  setCm(parse);
                }}
                style={{
                  marginLeft: 10,
                  height: 20,
                  width: "20%",
                }}
              />
            </div>
            <li>Atunci concentratia molara a acidului:</li>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <InlineMath math="c_{M(acid)}\cdot V_{acid}=c_{M(baza)}\cdot V_{baza}" />
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <InlineMath math="c_{M(acid)}=\frac{c_{M(baza)}\cdot V_{baza}}{V_{acid}}" />
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <InlineMath math={`c_{M(acid)}=  ${((vi - vf) * cm) / acid}`} />
            </div>
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
            width: 400,
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
          <ol style={{ maxWidth: 300, paddingLeft: 100, opacity: 0.7 }}>
            <li>
              Cu ajutorul unei palnii, volumul de baza de concentratie cunoscută
            </li>
            <li>
              Masuram cu ajutorul unui cilindru gradat un volum de acid de
              concentratie necunoscut
            </li>
            <li>Turnam volumul de acid in paharul Erlenmeyer</li>
            <li>Adaugăm 2-3 picaturi de fenolftaleina</li>
            <li>
              Deschidem robinetul biuretei eliberand astfel un anumit volum de
              baza in acid
            </li>
            <li>Agitam paharul Erlenmeyer</li>
            <li>
              Observam daca solutia a capatat o culoare roz-pal, fapt ce indica
              atingerea punctului de echivalență
            </li>
            <li>
              In caz contrar adaugam cu grija picaturi de baza pana la obtinerea
              culorii precizate
            </li>
            <li>
              Titrarea ia sfarsit in momentul atingerii punctului de echivalență
            </li>
          </ol>
          <Typography className="modal-t1" variant="h6" component="h2">
            Pasi pe care ii faci aici
          </Typography>
          <ol style={{ maxWidth: 300, width: "100%", paddingLeft: 100 }}>
            <li>Aducem din Toolbox toate elementele necesare titrarii</li>
            <li>Le pozitionam la locul lor</li>
            <li>
              Introducem baza, indicatorul si acidul cu care vrem sa lucram in
              input-urile de tip text
            </li>
            <li>Validam daca input-urile sunt corecte</li>
            <li>
              Alegem un volum de baza,de acid si concentratia bazei schimband
              input-urile de tip numere
            </li>
            <li>
              Deschidem robinetul a biuretei eliberand astfel un anumit volum de
              baza in acid
            </li>
            <li>Agitam paharul Erlenmeyer</li>
            <li>
              Observam daca solutia a capatat o culoare roz-pal, fapt ce indica
              atingerea punctului de echivalență
            </li>
            <li>
              In caz contrar adaugam cu grija picaturi de baza pana la obtinerea
              culorii precizate
            </li>
            <li>
              Titrarea ia sfarsit in momentul atingerii punctului de echivalență
            </li>
          </ol>
        </Box>
      </Modal>
    </>
  );
}

export default AreaButons;
