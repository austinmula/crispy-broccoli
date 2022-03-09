import React from 'react';
import Heading from '../components/dashboard-components/Heading';

const Profile = () => {
  return (
    <div>
      <Heading text='User profile' />
      <div>
        <div className='container mx-auto my-2'>
          <div className='md:flex no-wrap md:-mx-2 '>
            {/* <!-- Left Side --> */}
            <div className='w-full md:w-3/12 md:mx-2'>
              {/* <!-- Profile Card --> */}
              <div className='bg-white pb-5'>
                <div className='w-full h-52 flex justify-center items-center '>
                  <div className='h-48 w-48 rounded-full bg-gray-300 overflow-hidden mt-5'>
                    <img
                      className='h-full w-full object-cover object-center'
                      // src={defaultImg}
                      alt='user profile pic'
                    />
                  </div>
                </div>
                <h1 className='text-gray-900 font-bold text-xl leading-8 mt-6 text-center'>
                  {/* {user ? user.user_name : 'username'} */}
                  username
                </h1>
                <h3 className='text-gray-600 font-lg text-semibold leading-6 text-center'>
                  email@email.com
                  {/* {user ? user.email : 'email'} */}
                </h3>
              </div>
              {/* <!-- End of profile card --> */}
              <div className='my-4'></div>
              {/* More Left Side Content*/}
            </div>

            {/* <!-- Right Side --> */}
            <div className='w-full md:w-9/12 mx-2 h-64'>
              {/* <!-- Profile tab --> */}
              {/* <!-- Contact Section --> */}

              <div className='bg-white py-2 shadow-sm rounded-sm'>
                <div className='border-b-2 pb-3  flex items-center space-x-2 mt-3 mb-3 font-semibold text-gray-900 leading-8 px-4'>
                  <span clas='text-green-500'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-10 w-10'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={1}
                        d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                      />
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={1}
                        d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                      />
                    </svg>
                  </span>
                  <span className='tracking-wide text-3xl font-thin '>
                    Contact Information
                  </span>
                </div>
                <div className='text-gray-700'>
                  <div className='grid md:grid-cols-2 text-sm'>
                    <div className='grid grid-cols-2 mb-2'>
                      <div className='px-4 py-2 font-semibold'>Phone_num</div>
                      <div className='px-4 py-2'>
                        {/* {contact.phone_num ? contact.phone_num : 'N/A'} */}
                      </div>
                    </div>
                    <div className='grid grid-cols-2 mb-2'>
                      <div className='px-4 py-2 font-semibold'>
                        Postal Address
                      </div>
                      <div className='px-4 py-2'>
                        {/* {contact.postal_address ? contact.postal_address : 'N/A'} */}
                      </div>
                    </div>
                    <div className='grid grid-cols-2 mb-2'>
                      <div className='px-4 py-2 font-semibold'>County</div>
                      <div className='px-4 py-2'>
                        {/* {contact.county ? contact.county : 'N/A'} */}
                      </div>
                    </div>
                    <div className='grid grid-cols-2 mb-2'>
                      <div className='px-4 py-2 font-semibold'>
                        Constituency
                      </div>
                      <div className='px-4 py-2'>
                        {/* {contact.constituency ? contact.constituency : 'N/A'} */}
                      </div>
                    </div>
                    <div className='grid grid-cols-2 mb-2'>
                      <div className='px-4 py-2 font-semibold'>Email</div>
                      <div className='px-4 py-2'>
                        <a
                          className='text-blue-800'
                          href='/'
                          // href={user ? user.email : null}
                        >
                          {/* {user ? user.email : 'email'} */}
                        </a>
                      </div>
                    </div>
                    {/* <div className='grid grid-cols-2'>
                    <div className='px-4 py-2 font-semibold'>Birthday</div>
                    <div className='px-4 py-2'>Feb 06, 1998</div>
                  </div> */}
                  </div>
                </div>
                <button
                  // onClick={() => setShowmodal(true)}
                  className='block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4'
                >
                  Add Contact Information
                </button>
              </div>
              {/* <!-- End of about section --> */}

              <div className='my-4'></div>

              {/* <!-- More Right side Content --> */}

              {/* <!-- This example requires Tailwind CSS v2.0+ --> */}
              {/* {showmodal && <Modal setShowmodal={setShowmodal} />} */}
              {/* End Of modal */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
