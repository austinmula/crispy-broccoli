import React, { useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from '@faker-js/faker';
import moment from 'moment';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const CombinedChart = ({ myData }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Sensors Chart',
      },
    },
    scales: {
      yAxis: {
        min: 10,
        suggestedMax: 100,
      },
    },
  };

  const data = {
    labels: myData?.map((item) => moment(item.date).format('LT')),
    datasets: [
      {
        label: 'Temperature',
        data: myData?.map((item) => item.temperature),
        borderColor: 'rgb(27, 163, 156)',
        backgroundColor: 'rgba(27, 163, 156, 0.9)',
      },
      {
        label: 'Humidity',
        data: myData?.map((item) => item.humidity),
        borderColor: 'rgb(0, 230, 64)',
        backgroundColor: 'rgba(0, 230, 64, 0.9)',
      },
      {
        label: 'Water Level',
        data: myData?.map((item) => item.WL),
        borderColor: 'rgb(30, 130, 76)',
        backgroundColor: 'rgba(30, 130, 76, 0.9)',
      },
    ],
  };
  return <Line options={options} data={data} />;
};

export default CombinedChart;
