import React from 'react';
import { Bubble } from 'react-chartjs-2';

const BubbleChart = () => {

  const data = {
    datasets: [],
  };

  // Generate random datasets
  for (let i = 0; i < 5; i++) {
    const dataset = {
      label: `Candidate ${i + 1}`,
      title: 'title',
      data: [
        {
          x: Math.floor(Math.random() * 101),
          y: Math.floor(Math.random() * 101),
          r: 10,
        },
      ],
      backgroundColor: `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)}, 0.2)`,
    };
    data.datasets.push(dataset);
  }

  const options = {
    scales: {
      xAxes: [{
        scaleLabel: {
          display: true,
          label: 'Skill Match'
        },
        ticks: {
          min: 0,
          max: 100,
        },
      }],
      yAxes: [{
        scaleLabel: {
          display: true,
          label: 'Traits Match'
        },
        ticks: {
          min: 0,
          max: 100,
        },
      }],
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
