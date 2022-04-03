import React from 'react';

const Contact = () => {
  return (
    <div
      id='contacts'
      className='min-h-screen flex justify-center items-center section-3'
    >
      <div className='md:w-4/5 p-4 w-full rounded-md'>
        <div className='grid grid-cols-1 md:grid-cols-5'>
          <div className=' col-span-3 md:p-5 md:border-r-2 border-gray-400'>
            <h1 className='text-5xl pt-2 font-bold text-yellow-500 text-center'>
              Contact Us
            </h1>
            <p className='px-6 py-1 text-center text-md font-serif font-semibold text-white'>
              We Look forward to hearing from you.
            </p>
            <form action='' className='space-y-5 px-6 py-8'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                <div>
                  <label
                    htmlFor='Name'
                    className='block mb-2 font-bold text-sm text-gray-300'
                  >
                    Name
                  </label>
                  <input
                    type='text'
                    className='appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm'
                  />
                </div>
                <div>
                  <label
                    htmlFor='Email'
                    className='block mb-2 font-bold text-sm text-gray-300'
                  >
                    Email
                  </label>
                  <input
                    type='email'
                    className='appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm'
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor='Message'
                  className='block mb-2 font-bold text-sm text-gray-300'
                >
                  Message
                </label>
                <textarea
                  type='text'
                  className='appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm'
                  rows={4}
                />
              </div>

              <button
                type='submit'
                className='block bg-yellow-500 text-white w-full p-3 rounded-md'
              >
                Submit
              </button>
            </form>
          </div>

          <div className='col-span-2 flex items-center md:p-5 px-5'>
            <div>
              <h1 className='font-thin text-3xl text-yellow-500 pb-4'>
                Our Premises
              </h1>
              <p className='text-sm font-semibold text-gray-300 pb-2'>
                Office 35, Fodder Buliding, Park Avenue
              </p>
              <p className='text-sm font-semibold text-gray-300 pb-2'>
                Nairobi, Kenya
              </p>
              <p className='text-sm font-semibold text-gray-300 pb-2'>
                P.O Box 290-2342
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
