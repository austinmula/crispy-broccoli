import React from 'react';

const data = [
  {
    id: 1,
    heading: 'Nutrient Film Technology.',
    body: '',
    image:
      'https://images.pexels.com/photos/7299989/pexels-photo-7299989.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    id: 2,
    heading: 'Automation with Arduino.',
    body: '',
    image:
      'https://media.istockphoto.com/photos/robot-back-to-school-picture-id1169970936?s=2048x2048',
  },
  {
    id: 3,
    heading: 'Data Analytics and Visualization.',
    body: '',
    image:
      'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    id: 4,
    heading: 'Plant Growth Reports.',
    body: '',
    image:
      'https://images.pexels.com/photos/590011/pexels-photo-590011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
];

const Services = () => {
  return (
    <div id='services' className='w-full bg-slate-200 py-16'>
      <div className=''>
        <h2 className='text-3xl text-slate-800 text-center'>Key Features</h2>
      </div>

      <div className='w-5/6 mx-auto mb-6 border-0'>
        {/**Card Container */}
        <div className='mt-12 space-y-12 grid lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-8'>
          {/* Card 1 */}

          {data.map((i) => (
            <div
              key={i.id}
              className='grid grid-cols-1 md:grid-cols-2 bg-white shadow-lg'
            >
              <div className='h-56 md:h-64'>
                <img
                  src={i.image}
                  alt='Verical System'
                  className='object-cover object-center w-full h-full'
                />
              </div>
              <div className='pb-2'>
                <div className='space-y-5 pt-5 ml-4'>
                  <div>
                    <p className='text-2xl tracking-wide text-amber-500'>
                      {i.heading}
                    </p>
                  </div>
                  <div>
                    <p className='text-sm font-thin tracking-wide'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Numquam, mollitia.
                    </p>
                  </div>
                  <div className='flex justify-center'>
                    <button className='px-8 py-2 border-4 rounded-lg'>
                      More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* End Cards */}
        </div>
        {/**Card Container */}
      </div>
    </div>
  );
};

export default Services;
