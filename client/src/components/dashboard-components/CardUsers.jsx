import React from 'react';
import { UsersIcon } from '@heroicons/react/solid';

const CardUsers = ({ number }) => {
  return (
    <div className='p-3 bg-emerald-600 flex items-end flex-col rounded-md shadow'>
      <div className='border-b-0'>
        <UsersIcon
          className='h-28 w-28 object-center  object-contain text-white'
          aria-hidden='true'
        />
      </div>
      <div className='text-white flex justify-between items-center w-full h-full'>
        <div>
          <h1 className='text text-ellipsis text-5xl font-thin '>
            Total Users
          </h1>
        </div>
        <div>
          <p className='text-6xl  '>{number}</p>
        </div>
      </div>
    </div>
  );
};

export default CardUsers;
