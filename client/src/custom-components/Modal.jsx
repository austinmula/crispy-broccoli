/* This example requires Tailwind CSS v2.0+ */
import { useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';

export default function Modal({ profile }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className='block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4'
        onClick={() => setIsOpen(true)}
      >
        Edit Details
      </button>
      <Transition.Root show={isOpen}>
        <Dialog
          as='div'
          className='fixed z-10 inset-0 overflow-y-auto'
          onClose={setIsOpen}
        >
          <div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
            <Dialog.Overlay className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className='hidden sm:inline-block sm:align-middle sm:h-screen'
              aria-hidden='true'
            >
              &#8203;
            </span>

            <div className='relative inline-block align-bottom bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'>
              <div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
                <div className=''>
                  <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'>
                    <Dialog.Title
                      as='h3'
                      className='text-lg text-center leading-6 font-medium text-gray-900'
                    >
                      Edit Account Details
                    </Dialog.Title>
                    <div className='h-80 mt-6 overflow-y-auto'>
                      <div>
                        <form
                          //   onSubmit={handleSubmit}
                          className=''
                        >
                          <div>
                            <label
                              htmlFor='email'
                              className='block mb-2 text-sm font-medium text-gray-900 '
                            >
                              Email
                            </label>
                            <input
                              type='text'
                              name='email'
                              id='email'
                              value={profile.email}
                              //   onChange={handleChange}
                              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                            />
                          </div>

                          <div>
                            <label
                              htmlFor='user_name'
                              className='block mb-2 text-sm font-medium text-gray-900 '
                            >
                              Username
                            </label>
                            <input
                              type='text'
                              name='user_name'
                              id='user_name'
                              value={profile.user_name}
                              //   onChange={handleChange}
                              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                            />
                          </div>

                          <div>
                            <label
                              htmlFor='county'
                              className='block mb-2 text-sm font-medium text-gray-900 '
                            >
                              County
                            </label>
                            <input
                              type='text'
                              name='county'
                              id='county'
                              value={profile.county}
                              //   onChange={handleChange}
                              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                              placeholder='enter county name'
                            />
                          </div>

                          <div>
                            <label
                              htmlFor='constituency'
                              className='block mb-2 text-sm font-medium text-gray-900'
                            >
                              Constituency
                            </label>
                            <input
                              type='text'
                              name='constituency'
                              id='constituency'
                              value={profile.constituency}
                              //   onChange={handleChange}
                              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                              placeholder='enter constituency name'
                            />
                          </div>

                          <div>
                            <label
                              htmlFor='postal_address'
                              className='block mb-2 text-sm font-medium text-gray-900'
                            >
                              Postal_Address
                            </label>
                            <input
                              type='text'
                              name='postal_address'
                              id='postal_address'
                              value={profile.postal_address}
                              //   onChange={handleChange}
                              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                              placeholder='enter PO BOX and Code'
                            />
                          </div>

                          <div>
                            <label
                              htmlFor='phone_num'
                              className='block mb-2 text-sm font-medium text-gray-900'
                            >
                              Phone_Nmber
                            </label>
                            <input
                              type='text'
                              name='phone_num'
                              id='phone_num'
                              value={profile.phone_num}
                              //   onChange={handleChange}
                              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                              placeholder='enter phone number'
                            />
                          </div>
                          <div className='py-3'>
                            <button
                              type='submit'
                              className='w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm'
                            >
                              Edit
                            </button>
                          </div>
                        </form>
                      </div>

                      {/* Ed FORM */}
                    </div>
                  </div>
                </div>
              </div>
              <div className='bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse'>
                <button
                  type='button'
                  className='mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm'
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
