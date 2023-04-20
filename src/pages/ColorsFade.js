const getColor = (val, height1, buretVol, color) => {
  if (!val || !height1 || !buretVol || !color) {
    return [255, 255, 255];
  }
  const colors = [
    [color[0], color[1], color[2]], // set
    [color[0], color[1], color[2]], // mediu acid
    [color[0], color[1], color[2]], // mediu acid
    [color[3], color[4], color[5]], // mediu bazic
  ];
  let idx;
  if (val < height1) {
    idx = 0;
  } else if (val >= height1 && val < height1 + buretVol) {
    idx = 1;
  } else if (val >= height1 + buretVol) {
    idx = 2;
  }
  const [r1, g1, b1] = colors[idx];
  const [r2, g2, b2] = colors[idx + 1];
  const range =
    idx === 0
      ? height1
      : idx === 1
      ? buretVol
      : idx === 2
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
