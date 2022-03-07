import React from 'react';

const AboutUs = () => {
  return (
    <div id='about' className='w-full flex h-3/5 shadow-inner bg-white'>
      <div className='w-5/6 mx-auto grid mb-16'>
        <div className='mt-16 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-4'>
          <div className='h-68'>
            <img
              src='https://i0.wp.com/marketbusinessnews.com/wp-content/uploads/2019/03/Hydroponics-image-1.jpg?w=1147&ssl=1'
              alt='Commercial Hydroponics Farm'
              className='object-cover object-center h-100 w-100'
            />
          </div>
          <div className='ml-6'>
            <h2 className='text-3xl text-amber-500 mt-4'>About Hdyroponics</h2>

            <p className='mt-10 text-md tracking-wide'>
              We make use of the vertical hydroponics system that relies on
              gravity for movement of water and nutrients through the system.
              The water and nutrients are circulated and re-used in the system,
              leading to very little water wastage. As stated in SDG number 12,
              the efficient production and consumption of our scarce resources
              are important to ensuring sustainable development.
            </p>
            <p>
              This system uses less energy, due to gravity and also ensures the
              efficient consumption of water.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
