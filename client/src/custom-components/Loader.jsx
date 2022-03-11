import React from 'react';

const Loader = () => {
  return (
    <div className='h-full flex items-center justify-center space-x-2 animate-pulse'>
      <div className='w-8 h-8 bg-green-400 rounded-full'></div>
      <div className='w-8 h-8 bg-green-600 rounded-full'></div>
      <div className='w-8 h-8 bg-green-800 rounded-full'></div>
    </div>
  );
};

export default Loader;
