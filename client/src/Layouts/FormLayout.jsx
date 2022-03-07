import React from 'react';
import { Outlet } from 'react-router-dom';
// import user from '../user.png';

const FormLayout = () => {
  return (
    <div className='h-screen bg-gradient-to-r from-green-800 to-cyan-700 opacity-90 flex items-center justify-center w-full'>
      <div className='box-wrapper w-4/5 md:w-3/5 h-4/5 mx-auto rounded-lg shadow-2xl '>
        <div className='grid grid-cols-1 md:grid-cols-5 h-full'>
          <div className='overflow-hidden bg-gray-900 shadow-2xl col-span-2 hidden md:block'>
            <div className='flex flex-col justify-center items-center h-full'>
              <div className='h-2/5 w-3/5 '>
                <img src='./logo512.png' alt='user-icon' />
              </div>
            </div>
          </div>
          <div className='overflow-auto col-span-3 h-full bg-green-200 opacity-90 shadow-2xl  flex justify-center items-center'>
            <div className='w-4/5 h-4/5 '>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormLayout;
