import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const CombinedChart = ({ data }) => {
  return (
    <ResponsiveContainer>
      <AreaChart
        width={100}
        height={250}
        data={data}
        margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='5%' stopColor='#8884d8' stopOpacity={0.8} />
            <stop offset='95%' stopColor='#8884d8' stopOpacity={0} />
          </linearGradient>
          <linearGradient id='colorPv' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='5%' stopColor='#90ee90' stopOpacity={0.8} />
            <stop offset='95%' stopColor='#90ee90' stopOpacity={0} />
          </linearGradient>
          <linearGradient id='colorwl' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='5%' stopColor='#ffffe0' stopOpacity={0.8} />
            <stop offset='95%' stopColor='#ffffe0' stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey='created_at' />
        <YAxis />
        <CartesianGrid strokeDasharray='3 3' />
        <Tooltip />
        <Area
          type='monotone'
          dataKey='temperature'
          stroke='#8884d8'
          fillOpacity={1}
          fill='url(#colorUv)'
        />
        <Area
          type='monotone'
          dataKey='humidity'
          stroke='#90ee90'
          fillOpacity={1}
          fill='url(#colorPv)'
        />
        <Area
          type='monotone'
          dataKey='wl'
          stroke='#FFE87C'
          fillOpacity={1}
          fill='url(#colorwl)'
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default CombinedChart;
