import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
// import './Line.css'


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
);

function LineChart() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      datalabels: {
        display: false
      },
    },
    scales: {
      y: {
        min: 0,
        max: 10
      }
    },
  };

  const labels = ['Tasks', 'Decision-making', 'Goal Setting', 'Time Orientation', 'Relationships', 'Conflict']

  const data = {
    labels,
    datasets: [
      {
        label: 'Average intake',
        data: labels.map(() => Math.floor(Math.random() * 11)),
        borderColor: '#f72585',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        // showLine: false,
      },
      {
        label: 'User-submitted',
        data: labels.map(() => Math.floor(Math.random() * 11)),
        borderColor: '#4cc9f0',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        // showLine: false,
      },
    ],
  };
  return (
      <Line options={options} data={data}/>
  )
}
export default LineChart
