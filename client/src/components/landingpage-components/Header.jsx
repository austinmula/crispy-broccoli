import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='py-6'>
      <div className='container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full'>
        <div className='text-lg font-bold z-10 text-white'>Hydrax</div>
        <div className='hidden md:flex space-x-12 items-center z-10'>
          <a href='/' className='text-bold text-white'>
            Home
          </a>
          <a href='#about' className='text-bold text-white'>
            About
          </a>
          <a href='#contacts' className='text-bold text-white'>
            Contacts
          </a>

          <button className='px-6 py-2 bg-yellow-500 font-bold text-white rounded-md z-10'>
            <Link to='/login'>Sign In</Link>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
