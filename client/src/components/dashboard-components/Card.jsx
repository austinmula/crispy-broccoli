import React from 'react';

const Card = ({ i }) => {
  return (
    <div className='relative text-gray-100 p-4 bg-gray-700 h-full'>
      <span className='absolute right-1 top-2 px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-200 text-green-800'>
        Sensor Data
      </span>

      <div className='rounded-md flex justify-between mt-6 py-3'>
        <div>
          <h1 className='text text-ellipsis text-2xl'>{i.name}</h1>
        </div>
        <div>
          <p className='text-6xl'>{i.value}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
