import React, { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';
import axios from 'axios';
import moment from 'moment';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const [summary, setSummary] = useState([]);

  useEffect(() => {
    const fetchSummary = async () => {
      const response = await axios.get(
        'http://localhost:4001/api/users/summary'
      );
      console.log(response.data);
      setSummary(response.data);
    };
    fetchSummary();
  }, []);

  const data = {
    labels: summary?.map((item) => moment(item.Week).format('MMMM Do YYYY')),
    datasets: [
      {
        label: 'Registration Rate',
        data: summary?.map((item) => parseInt(item.count)),
        backgroundColor: 'rgba(147, 250, 165, 0.8)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Weekly Registration Rate',
      },
    },
    scales: {
      yAxis: {
        min: 0,
        suggestedMax: 15,
      },
      xAxis: {
        offset: true,
      },
    },
  };

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default BarChart;
