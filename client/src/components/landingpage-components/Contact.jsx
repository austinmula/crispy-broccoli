import React from 'react';

const Contact = () => {
  return (
    <div
      id='contacts'
      className='min-h-screen bg-gray-100  flex justify-center items-center section-3'
    >
      <div className='w-4/5 h-4/5'>
        <div className='grid grid-cols-1 md:grid-cols-2'>
          <div className='bg-gray-300 h-full'>
            <h1 className='text-5xl px-6 pt-2 text-bold text-yellow-500 '>
              Contact Us
            </h1>
            <p className='px-6 py-1 text-lg'>
              We Look forward to hearing from you.
            </p>
            <form action='' className='space-y-5 px-6 py-8'>
              <div>
                <label htmlFor='Name' className='block mb-2 font-bold text-sm'>
                  Name
                </label>
                <input type='text' className='border-yellow-400 p-2 w-full' />
              </div>
              <div>
                <label htmlFor='Email' className='block mb-2 font-bold text-sm'>
                  Email
                </label>
                <input type='email' className='border-yellow-400 p-2 w-full' />
              </div>
              <div>
                <label
                  htmlFor='Message'
                  className='block mb-2 font-bold text-sm'
                >
                  Message
                </label>
                <textarea
                  type='text'
                  className='border-yellow-400 p-2 w-full'
                />
              </div>

              <button
                type='submit'
                className='block bg-yellow-500 text-white w-full p-3'
              >
                Submit
              </button>
            </form>
          </div>

          <div></div>
        </div>
        {/* <div className='card w-full h-full flex flex-wrap'> */}
        {/* <div className='overflow-hidden w-3/5 bg-green-200 opacity-90  left-side rounded-lg shadow-2xl'> */}
        {/* h1 to form */}
        {/* </div>
          <div className='right-side'></div>
        </div> */}
      </div>
    </div>
  );
};

export default Contact;
