import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Card = ({ value, text, symbol }) => {
  return (
    <div className='lg:w-72 w-full bg-gray-100 shadow-md p-2'>
      <div className='flex justify-between '>
        <h1 className='font font-semibold text-md text-gray-600'>
          Sensor Data
        </h1>

        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='#333'
          strokeWidth={2}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </svg>
      </div>
      <div className='p-4 flex flex-col justify-center items-center gap-4'>
        <div className='w-48 h-48'>
          <CircularProgressbar
            value={value}
            text={`${value || 0} ${symbol}`}
            strokeWidth={4}
          />
        </div>
        <p className='text-sm font-bold font-sans text-gray-700'>{text}</p>
      </div>
    </div>
  );
};

export default Card;
