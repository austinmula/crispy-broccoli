import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getprofile } from '../features/profile/profileSlice';
import moment from 'moment';
import Error from '../custom-components/Error';
import Modal from '../custom-components/Modal';
import Calender from '../components/dashboard-components/profile/Calender';
import PickDate from '../components/dashboard-components/profile/PickDate';
import axios from 'axios';

const Profile = () => {
  const dispatch = useDispatch();
  const [Errmsg, setErrmsg] = useState('');
  const { profile, message, isError } = useSelector((state) => state.profile);
  const { user } = useSelector((state) => state.auth);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState(new Date());
  const [tasks, setTasks] = useState([]);

  const handleSubmit = async () => {
    if (title && date) {
      const data = {
        title,
        date: date,
        user_id: user.user_id,
      };
      const response = await axios.post(
        'http://localhost:4001/api/events',
        {
          data,
        },
        {
          headers: { token: user.token },
        }
      );
      if (response.status === 200) {
        setTasks((currentdata) => [
          ...currentdata,
          {
            title: response.data.title,
            date: moment(response.data.date).toISOString().slice(0, 10),
          },
        ]);

        setTitle('');
      }
    }
  };

  useEffect(() => {
    const getTasks = async function () {
      const response = await axios.get('http://localhost:4001/api/events', {
        headers: { token: user.token },
      });
      if (response.data) {
        response.data.forEach((item) => {
          item.date = moment(item.date).toISOString().slice(0, 10);
        });
        setTasks(response.data);
      }
    };
    getTasks();
  }, [user.token]);

  useEffect(() => {
    if (isError) {
      setErrmsg(message.error);
    }
    dispatch(getprofile());
  }, [dispatch, isError, message.error]);

  return (
    <div>
      {isError && <Error errormessage={Errmsg} />}
      <div>
        <div className=' mx-auto mt-4'>
          <div className='md:flex no-wrap md:-mx-2 '>
            {/* <!-- Left Side --> */}
            <div className='w-full md:w-9/12 mx-2 h-auto'>
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
                        {profile.phone_num ? profile.phone_num : 'N/A'}
                      </div>
                    </div>
                    <div className='grid grid-cols-2 mb-2'>
                      <div className='px-4 py-2 font-semibold'>
                        Postal Address
                      </div>
                      <div className='px-4 py-2'>
                        {profile.postal_address
                          ? profile.postal_address
                          : 'N/A'}
                      </div>
                    </div>
                    <div className='grid grid-cols-2 mb-2'>
                      <div className='px-4 py-2 font-semibold'>County</div>
                      <div className='px-4 py-2'>
                        {profile.county ? profile.county : 'N/A'}
                      </div>
                    </div>
                    <div className='grid grid-cols-2 mb-2'>
                      <div className='px-4 py-2 font-semibold'>
                        Constituency
                      </div>
                      <div className='px-4 py-2'>
                        {profile.constituency ? profile.constituency : 'N/A'}
                      </div>
                    </div>
                    <div className='grid grid-cols-2 mb-2'>
                      <div className='px-4 py-2 font-semibold'>Email</div>
                      <div className='px-4 py-2'>
                        <a className='text-blue-800' href='/dashboard'>
                          {profile.email ? profile.email : 'N/A'}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {!profile.phone_num && <Modal profile={profile} />}
              </div>
              <PickDate
                setTitle={setTitle}
                title={title}
                date={date}
                setDate={setDate}
                handleSubmit={handleSubmit}
              />
            </div>

            {/* <!-- Left Side --> */}
            <div className='w-full md:w-3/12 md:mx-2'>
              {/* <!-- Profile Card --> */}
              <div className='bg-white pb-5'>
                <div className='w-full h-52 flex justify-center items-center'>
                  <div className='h-48 w-48 rounded-full bg-gray-300 overflow-hidden mt-5'>
                    <img
                      className='h-full w-full object-cover object-center'
                      src='/user.png'
                      alt='user profile pic'
                    />
                  </div>
                </div>
                <h1 className='text-gray-900 font-bold text-xl leading-8 mt-6 text-center'>
                  {profile.user_name ? profile.user_name : 'N/A'}
                </h1>
                <h3 className='text-gray-600 font-lg text-semibold leading-6 text-center'>
                  {profile.email ? profile.email : 'N/A'}
                </h3>
              </div>
              {/* <!-- End of profile card --> */}
              <div className='my-4 bg-white  px-3 shadow-sm text-gray-700'>
                <small className='font-semibold'>Member Since:</small>
                <p className='text-md font-bold border-b-2 py-3'>
                  {profile.created_at
                    ? moment(profile.created_at).format('MMMM Do YYYY')
                    : 'N/A'}
                </p>

                <small className='font-semibold'>User Type:</small>
                <p className='text-md font-bold border-b-0 py-2'>
                  {profile.user_type
                    ? profile.user_type === 1
                      ? 'Farmer'
                      : 'Admin'
                    : 'N/A'}
                </p>
              </div>
              {/* More Left Side Content*/}
            </div>
            {/* End Right */}
          </div>
        </div>
        <div className='bg-gray-50 p-3 my-5 shadow-md rounded'>
          <Calender tasks={tasks} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
