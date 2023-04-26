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
    let label = [];
    function generateData(ValuesX, ValuesY) {
      for (let x = 1; x <= 49; x += 1) {
        ValuesY.push(1 - Math.log10((50 - x) / (50 + x)));
        ValuesX.push(x);
      }
      ValuesY.push(4);
      ValuesX.push(50);
      ValuesY.push(6);
      ValuesX.push(51);
      for (let x = 52; x <= 100; x += 1) {
        ValuesY.push(9 + Math.log(Math.log(x - 50) / Math.log(10)));
        ValuesX.push(x);
      }
      for (let x = 0; x <= 100; x++) {
        label.push(x);
      }
    }
    generateData(newValuesX, newValuesY);

    // newValuesY = [1, 1.17, 1.36, 1.47, 1.6, 1.84];
    // newValuesY = [
    //   1, 1.17, 1.36, 1.47, 1.6, 1.84, 2.27, 2.32, 2.38, 2.44, 2.5, 2.59, 2.69,
    //   2.81, 2.99, 3.29, 3.34, 3.39, 3.45, 3.52, 3.6, 3.82, 4.3, 4.42, 4.6, 4.9,
    //   4.99, 5.3, 5.6, 6.3,
    // ];

    // newValuesX = [
    //   0, 20, 40, 50, 60, 75, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 99.1, 99.2,
    //   99.3, 99.4, 99.5, 99.7, 99.9, 99.925, 99.95, 99.975, 99.98, 99.99, 99.995,
    //   99.999,
    // ];
    let pos = Math.floor(sliderValue);
    const data = {
      labels: label,
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
              scales: {
                y: {
                  ticks: {
                    stepSize: 1,
                  },
                },
                x: {
                  ticks: {
                    stepSize: 10,
                  },
                },
              },
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
