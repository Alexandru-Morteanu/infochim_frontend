import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart,
  LinearScale,
  CategoryScale,
  LogarithmicScale,
  PointElement,
  LineElement,
  Tooltip,
} from "chart.js";

Chart.register(
  LinearScale,
  LogarithmicScale,
  CategoryScale,
  PointElement,
  LineElement,
  Tooltip
);
function Graphic() {
  const [functionString, setFunctionString] = useState("");
  const [chartData, setChartData] = useState(null);
  const [sliderValue, setSliderValue] = useState(50);
  const handleSliderChange = (event) => {
    const intValue = parseInt(event.target.value, 10);
    setSliderValue(intValue);
  };

  const handleChange = (e) => {
    setFunctionString(e.target.value);
  };
  useEffect(() => {
    handleSubmit();
  }, [sliderValue]);
  const handleSubmit = (e) => {
    let newValuesX = [];
    let newValuesY = [];
    function generateData(value, i1, i2, step, ValuesX, ValuesY) {
      for (let x = i1; x <= i2; x += step) {
        ValuesY.push(eval(value));
        ValuesX.push(x);
      }
    }
    generateData(functionString, 0, 10, 0.5, newValuesX, newValuesY);
    // newValuesY = [
    //   0, 2, 2, 2, 2, 3, 9, 12.25, 16, 20.25, 25, 30.25, 36, 42.25, 49, 56.25,
    //   64, 72.25, 81, 90.25, 100,
    // ];
    let pos = Math.floor(sliderValue / 5);
    const data = {
      labels: newValuesX,
      datasets: [
        {
          fill: false,
          pointRadius: 0,
          borderColor: "rgba(0,0,255,0.5)",
          data: newValuesY,
        },
        {
          label: newValuesY[pos],
          fill: false,
          pointBackgroundColor: "red",
          pointRadius: 6,
          data: [{ x: newValuesX[pos], y: newValuesY[pos] }],
        },
      ],
    };
    setChartData({ data });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        height: "60%",
      }}
    >
      <input
        id="functionString"
        type="text"
        value={functionString}
        onChange={handleChange}
      />
      <input
        type="range"
        min="0"
        max="100"
        step="1"
        value={sliderValue}
        onChange={handleSliderChange}
      />
      {chartData && (
        <div
          style={{
            height: "100%",
          }}
        >
          <Line
            data={chartData.data}
            options={{
              animation: false,
              plugins: {
                tooltip: {
                  callbacks: {
                    label: function (context) {
                      return `Avem un pH de ${context.parsed.y}`;
                    },
                  },
                },
              },
            }}
          />
        </div>
      )}
    </div>
  );
}

export default Graphic;
