import React from 'react';

const Hero = () => {
  return (
    <div className='container mt-16 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full'>
      <div className='flex flex-wrap md:flex-nowrap'>
        {/* Hero section */}
        <div className='flex flex-wrap justify-center max-w-md mt-0 md:my-30 absolute'>
          <h1 className='font-bold text-4xl md:text-5xl lg:text-6xl text-center md:text-left text-yellow-500 tracking-wider'>
            Vertical Hydroponics
          </h1>
          <p className='mt-8 md:text-xl font-light lg:text-xl text-center md:text-left text-slate-300'>
            Hydroponics refers to the process of growing plants in sand, gravel,
            or liquid, with added nutrients but without soil.
          </p>
          <div className='w-full flex justify-center md:justify-start'>
            <button className='px-8 py-4 bg-yellow-500 text-white font-bold mt-12'>
              Learn More
            </button>
          </div>
        </div>
        <img
          src='https://www.foodsafetynews.com/files/2021/03/hydroponics1200x680-660x374.jpg'
          alt='Hydroponics'
          className='w-2/9 mt-12 md:absolute md:mt-0 right-20'
        />
      </div>
    </div>
  );
};

export default Hero;
