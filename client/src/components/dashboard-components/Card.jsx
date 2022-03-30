import React from 'react';

const Card = ({ value, name }) => {
  return (
    <div className='rounded-sm shadow-sm bg-gradient-to-l from-green-400 to-cyan-600 flex items-center justify-center p-5'>
      <div className='rounded-full w-52 h-52 border-4 border-green-200 flex flex-col items-center justify-center'>
        <h1 className='text-2xl text-cyan-100 font-semibold'>{name}</h1>
        <h1 className='text-5xl mt-1 text-cyan-50'>{value || 0}</h1>
      </div>
    </div>
  );
};

export default Card;
