import React from 'react';

const Mobile = ({ setShowSidebar, showSidebar }) => {
  return (
    <div className='bg-gray-900 text-gray-100 flex justify-between md:hidden'>
      {/* logo */}
      <h1 className='text-xl font-thin p-4'>hydrax-Dashboard</h1>
      {/* hambuger */}
      <button
        onClick={() => setShowSidebar(!showSidebar)}
        className='focus:outline-none focus:bg-gray-700 p-4'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth={2}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M4 6h16M4 12h8m-8 6h16'
          />
        </svg>
      </button>
    </div>
  );
};

export default Mobile;
