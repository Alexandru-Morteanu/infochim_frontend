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
function Graphic({ bazaVol, height, setHeight, nr }) {
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
  }, [height, bazaVol]);
  useEffect(() => {
    handleSubmit();
  }, [sliderValue]);
  const handleSubmit = () => {
    let newValuesX = [];
    let newValuesY = [];
    let label = [];
    for (let x = 0; x <= 200; x++) {
      label.push(x);
    }
    function generateData(ValuesX, ValuesY, bazaVol, height, setHeight) {
      let h = bazaVol === 0 ? 1 : 50 / bazaVol;
      let j = height - setHeight;

      for (let x = 1; x <= j * 2 * h; x += 1) {
        if (x < 100) {
          ValuesY.push(1 - Math.log10((100 - x) / (100 + x)));
          ValuesX.push(x);
        }
        if (x === 100) {
          ValuesY.push(4);
          ValuesX.push(100);
        }
        if (x === 101) {
          ValuesY.push(6);
          ValuesX.push(101);
        }
        if (x > 101) {
          ValuesY.push(9 + Math.log(Math.log(x - 100) / Math.log(100)));
          ValuesX.push(x);
        }
      }
    }
    function generateData1(ValuesX, ValuesY, sliderValue) {
      for (let x = 1; x <= sliderValue * 2; x += 1) {
        if (x < 100) {
          ValuesY.push(1 - Math.log10((100 - x) / (100 + x)));
          ValuesX.push(x);
        }
        if (x === 100) {
          ValuesY.push(4);
          ValuesX.push(100);
        }
        if (x === 101) {
          ValuesY.push(6);
          ValuesX.push(101);
        }
        if (x > 101) {
          ValuesY.push(9 + Math.log(Math.log(x - 100) / Math.log(100)));
          ValuesX.push(x);
        }
      }
    }
    if (nr === 1) {
      generateData(newValuesX, newValuesY, bazaVol, height, setHeight);
    } else if (nr === 2) {
      generateData1(newValuesX, newValuesY, sliderValue);
    }
    console.log(nr);

    const data = {
      labels: label,
      datasets: [
        {
          fill: false,
          pointRadius: 0,
          borderColor: "rgba(0,0,255,0.5)",
          data: newValuesY,
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
      {nr === 2 && (
        <input
          type="range"
          min="0"
          max="100"
          step="1"
          value={sliderValue}
          onChange={handleSliderChange}
        />
      )}
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
                  title: {
                    display: true,
                    text: "pH",
                  },
                  min: 0,
                  max: 10,
                },
                x: {
                  title: {
                    display: true,
                    text: "% acid titrat",
                  },
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
