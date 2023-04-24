import { Radar } from 'react-chartjs-2';
// import './Chart.css'

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

function RadarChart() {
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
    // important to set min and max
    scales: {
      r: {
        angleLines: {
          display: false
        },
        min: 0,
        max: 4,
        ticks: {
          stepSize: 1
        }
      }
    }

  };
  const data = {
    labels: [
      'Product Sense',
      'Design',
      'Technical',
      'Strategy',
      'Data & KPI Execution',
      'User Research',
      'Project Management',
      'Communication',
      'Charisma'
    ],
    datasets: [{
      label: 'Average intake',
      data: Array.from({ length: 9 }, () => Math.floor(Math.random() * 4) + 1),
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: '#f72585',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'
    }, {
      label: 'User-submitted',
      data: Array.from({ length: 9 }, () => Math.floor(Math.random() * 4) + 1),
      fill: true,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: '#4cc9f0',
      pointBackgroundColor: 'rgb(54, 162, 235)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(54, 162, 235)'
    }]
  };

  return (
    <Radar data={data} options={options} />
  )
}

export default RadarChart