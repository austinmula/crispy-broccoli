import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const PickDate = ({ setTitle, date, setDate, handleSubmit }) => {
  return (
    <div className='bg-white my-4 py-2 shadow-sm rounded-sm'>
      <div className='border-b-2 pb-3  flex items-center space-x-2 mt-3 mb-3 font-semibold text-gray-900 leading-8 px-4'>
        <span clas='text-green-500'>
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
              d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
            />
          </svg>
        </span>
        <span className='tracking-wide text-3xl font-thin '>Planner</span>
      </div>

      <div className='text-sm mr-2 text-gray-700'>
        <div className='grid grid-cols-5 mb-2'>
          <div className='px-4 py-2 font-semibold'>Event Description</div>
          <div className='col-span-4 py-2 ml-4'>
            <input
              name='text'
              type='text'
              className='appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm'
              placeholder='Enter Event Description'
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>

        <div className='grid grid-cols-5 mb-2'>
          <div className='px-4 py-2 font-semibold'>Date</div>
          <div className='col-span-4 py-2 ml-4'>
            <DatePicker
              className='rounded-md border px-3 py-2 w-full border-gray-300 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm'
              placeholderText='Enter Date'
              onChange={(date) => setDate(date)}
              selected={date}
            />
          </div>
        </div>

        {/* btn */}
        <div className='px-4'>
          <button
            onClick={handleSubmit}
            type='submit'
            className='group relative w-full flex justify-center py-2 mb-4 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
          >
            Add Event
          </button>
        </div>
        {/* bnt */}
      </div>
    </div>
  );
};

export default PickDate;
