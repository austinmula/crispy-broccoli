import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const ComboChart = ({ data }) => {
  return (
    <ResponsiveContainer width='100%' height='100%'>
      <LineChart
        width={500}
        height={500}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='date' />
        <YAxis />
        <Tooltip />
        <Line
          type='monotone'
          dataKey='temperature'
          stroke='#90EE90'
          fill='#90EE90'
          strokeWidth={2}
        />
        <Line
          type='monotone'
          dataKey='humidity'
          stroke='#808080'
          fill='#808080'
          strokeWidth={2}
        />
        <Line
          type='monotone'
          dataKey='WL'
          stroke='#89CFF0'
          fill='#89CFF0'
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ComboChart;
