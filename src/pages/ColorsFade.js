const getColor = (val, height1, buretVol, color) => {
  if (!val || !height1 || !buretVol || !color) {
    return [255, 255, 255];
  }
  let midr = (parseInt(color[0]) + parseInt(color[3])) / 2;
  let midg = (parseInt(color[1]) + parseInt(color[4])) / 2;
  let midb = (parseInt(color[2]) + parseInt(color[5])) / 2;
  const colors = [
    [color[0], color[1], color[2]],
    [color[0], color[1], color[2]],
    [color[0], color[1], color[2]],
    [midr, midg, midb],
    [color[3], color[4], color[5]],
  ];
  let idx;
  if (val < height1) {
    idx = 0;
  } else if (val >= height1 && val < height1 + buretVol) {
    idx = 1;
  } else if (val === height1 + buretVol) {
    idx = 2;
  } else if (val > height1 + buretVol) {
    idx = 3;
  }
  const [r1, g1, b1] = colors[idx];
  const [r2, g2, b2] = colors[idx + 1];
  const range =
    idx === 0
      ? height1
      : idx === 1
      ? buretVol
      : idx === 2
      ? 1
      : idx === 3
      ? 100 - (height1 + buretVol)
      : 0;
  const dist = val - (idx === 0 ? 0 : idx === 1 ? height1 : height1 + buretVol);
  const r = Math.round((r1 * (range - dist) + r2 * dist) / range);
  const g = Math.round((g1 * (range - dist) + g2 * dist) / range);
  const b = Math.round((b1 * (range - dist) + b2 * dist) / range);
  //console.log([r, g, b]);
  return [r, g, b];
};
export default getColor;
