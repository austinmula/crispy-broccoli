import React from 'react';
import Navigation from './Navigation';

const SideBar = ({ showSidebar, handleLogOut }) => {
  return (
    <div
      className={`${
        !showSidebar ? '-translate-x-full' : null
      } w-64 bg-gray-900 text-white min-h-screen space-y-6 fixed inset-y-0 left-0 transform duration-200 ease-in-out md:relative md:translate-x-0`}
    >
      {/* logo */}
      <div className='h-20 border-b-2 flex items-center px-6'>
        <h1 className='text-xl font-bold'>hydrax-Dashboard</h1>
      </div>
      {/* Nav */}
      <Navigation />

      <div className='fixed bottom-0 left-0 w-full'>
        <button
          onClick={handleLogOut}
          className='w-full flex items-center px-6 py-2 mt-4 hover:text-gray-300 bg-gray-700 hover:bg-opacity-25 text-gray-100'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'
            />
          </svg>

          <span className='mx-3'>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default SideBar;
