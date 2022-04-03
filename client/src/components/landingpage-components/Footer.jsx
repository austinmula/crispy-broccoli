import React from 'react';

const Footer = () => {
  return (
    <div className='bg-gray-800'>
      <div className='w-4/5 mx-auto py-4 flex flex-wrap justify-between gap-1'>
        <div className='py-2 md:w-1/3 w-full px-3'>
          <h1 className='font-semibold text-gray-400'>Quick Links</h1>
          <div className='border-r-0 border-gray-600'>
            <ul className='pl-2 font-light text-gray-50 mt-2 text-sm'>
              <li>
                <a href='#services'>Services</a>
              </li>
              <li>
                <a href='#about'>About Us</a>
              </li>
              <li>
                <a href='#contacts'>Contacts</a>
              </li>
              <li>
                <a href='#'>Top</a>
              </li>
            </ul>
          </div>
        </div>
        <div className=' py-2 md:w-1/2 w-full px-3  '>
          <h1 className='font-semibold text-gray-400'>Contact Information</h1>
          <div className='border-r-0 border-gray-600'>
            <ul className='pl-2 font-light text-gray-50 mt-2 text-sm'>
              <li>Office 35, Fodder Buliding, Park Avenue</li>
              <li>hydrax@mail.com</li>
              <li>Nairobi-Kenya</li>
              <li>+254 202-3453-2342</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='bg-gray-900 flex justify-center items-center p-4 font-semibold text-sm text-gray-300'>
        Austin Mula, Najash Ahmed &copy; 2022
      </div>
    </div>
  );
};

export default Footer;
