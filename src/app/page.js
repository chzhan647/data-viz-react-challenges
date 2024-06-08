"use client"

import { Chart as ChartJS,
  CategoryScale, 
  LinearScale,
PointElement,
LineElement,
Title,
Tooltip,
Legend,
} from "chart.js";

import {Line} from "react-chartjs-2";
import { useEffect,useState } from "react";
// import faker from "faker"
import * as d3 from "d3";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);


function makeChart(players) {
  // players is an array of objects where each object represents a player
}

export default function Home() {
  const [chartData, setChartData] = useState(null);
  const [chartOptions, setChartOptions] = useState(null);

  useEffect(() => {

  const options = {

    plugins: {
      title: {
        display: true,
        text: 'Chart.js Bar Chart - Stacked',
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        // data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        backgroundColor: 'rgb(255, 99, 132)',
      },
      {
        label: 'Dataset 2',
        // data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        backgroundColor: 'rgb(75, 192, 192)',
      },
      {
        label: 'Dataset 3',
        // data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        backgroundColor: 'rgb(53, 162, 235)',
      },
    ],
  };
  setChartData(data);
  setChartOptions(options);
  
} ,[]);
  
  return (
    <main suppressHydrationWarning={true} className="bg-white flex min-h-screen flex-col items-center justify-between p-24">
      {chartData && chartOptions ? <Line options={chartOptions} data={chartData} /> : <p>Loading...</p>}
    </main>
  );
}
