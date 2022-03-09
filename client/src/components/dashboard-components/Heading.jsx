import React from 'react';

const Heading = ({ text }) => {
  return (
    <div className='my-4'>
      <div className='pb-4  border-b-2 border-slate-400'>
        <h1 className='text-4xl font-thin text-gray-700'>{text}</h1>
      </div>
    </div>
  );
};

export default Heading;
