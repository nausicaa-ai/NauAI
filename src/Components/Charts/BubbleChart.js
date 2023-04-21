import React from 'react';
import { Bubble } from 'react-chartjs-2';
import { Colors } from 'chart.js';
import 'chartjs-plugin-datalabels';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import Chart from 'chart.js/auto';
import 'chartjs-plugin-datalabels';

Chart.register(Colors);
Chart.register(ChartDataLabels);


const BubbleChart = () => {
  const data = {
    datasets: [],
  };

  // Generate random datasets
  for (let i = 0; i < 6; i++) {
    const dataset = {
      label: `Candidate ${i + 1}`,
      title: 'title',
      data: [
        {
          x: Math.floor(Math.random() * 101),
          y: Math.floor(Math.random() * 101),
          r: 10,
          label: `Candidate ${i + 1}`
        },
      ],
      //To randomize colors, but using Colors plugin from chart.js
      // backgroundColor: `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
      //   Math.random() * 256
      // )}, ${Math.floor(Math.random() * 256)}, 0.2)`,
    };
    data.datasets.push(dataset);
  }

  const options = {
    plugins: {
      colors: {
        enabled: true
      },
      datalabels: {
        anchor: "end",
        align: "top",
        color: "black",
        display: function (context) {
          return context.dataset.data.length > 0; // show labels only for non-empty datasets
        },
        formatter: function (value, context) {
          return context.chart.data.datasets[context.datasetIndex].label; // display dataset label as the value
        }
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Skill Match Score (%)'
        },
        ticks: {
          min: 0,
          max: 100,
        },
      },
      y: {
        title: {
          display: true,
          text: 'Traits Match Score(%)'
        },
        ticks: {
          min: 0,
          max: 100,
        },
      },
    },
  };

  return (
    <>
      <div className="row center">
        <div className="col s8">
          <div className="card hoverable ">
            <div className="card-content">
              <Bubble data={data} options={options} />
            </div>
          </div>
        </div>
        <div className="col s4">
          <div className="card hoverable">
            <div className="card-content">
              <table className="">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Skills Match Score</th>
                    <th>Traits Match Score</th>

                  </tr>
                </thead>
                <tbody>
                  {data.datasets.map((dataset, i) => (
                    <tr key={i}>
                      <td>{dataset.label}</td>
                      <td className="center">{dataset.data[0].x}</td>
                      <td className="center">{dataset.data[0].y}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BubbleChart;
