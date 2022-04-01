import { useSelector } from 'react-redux';
import Admin from '../components/dashboard-components/admin/Admin';
import Heading from '../components/dashboard-components/Heading';
import io from 'socket.io-client';
import { useEffect, useState, useRef } from 'react';
import Realtime from '../components/dashboard-components/Realtime';
import moment from 'moment';

const DasboardHome = () => {
  const [realtime, setRealtime] = useState({});
  const [fullSet, setFullSet] = useState([]);
  const socket = useRef();
  useEffect(() => {
    socket.current = io('ws://localhost:3002');
  }, []);

  useEffect(() => {
    socket?.current.on('arduino-data', (data) => {
      // console.log(data);
      setRealtime(data);
      data = { ...data, date: moment(data.date).format('LT') };

      setFullSet((currentdata) => [...currentdata, data]);
      // console.log(fullSet.length);
    });
  }, []);

  const { user } = useSelector((state) => state.auth);

  return (
    <div>
      <Heading text={'Dashboard'} />
      {user.user_type === 1 && (
        <div className='mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
          {/* First Grid Item */}
          <div className='py-8 pl-4 mb-6 rounded-md md:h-76 bg-gradient-to-bl from-green-500 to-cyan-600 text-gray-100 shadow-lg flex items-center col-span-2'>
            <div className='grid grid-cols-1 sm:grid-cols-2'>
              <div className='space-y-3 pb-3'>
                <h1 className='text-4xl font-light '>
                  Hydroponics Data Dashboard
                </h1>
                <p className='font-bold text-md '>
                  Quick Data analysis for all your needs
                </p>
                <p className='text-sm leading-6'>
                  You can access the data from your hydroponics farm on here.
                  The data is from the water-level, humidity and temperature
                  sensors.
                </p>
              </div>
              <div className='h-full w-full'>
                <img
                  className='w-full h-full object-center object-cover'
                  src='/dashboard.png'
                  alt='dashboard'
                />
              </div>
            </div>
          </div>
          {/* End of First Grid Item */}

          <div className='rounded-md'>
            <div className='flex items-center rounded-3xl shadow-md bg-gradient-to-b from-gray-500 to-gray-700 p-5 text-gray-100'>
              <div className='w-16 h-16 rounded-full bg-gray-50 overflow-hidden'>
                <img
                  className='h-full w-full object-cover object-center'
                  src='./user.png'
                  alt='user profile pic'
                />
              </div>
              <div className='ml-6'>
                <p className='font-bold text-md'>{user.user_name}</p>
                <p className='font-md text-semibold '>{user.email}</p>
              </div>
            </div>
            <div className='mt-3 bg-emerald-600 h-40 flex items-center justify-center rounded-md shadow-md '>
              <p className='text-4xl font-light text-gray-50'>
                {user?.user_type === 1 ? 'Farmer View' : 'Admin View'}
              </p>
            </div>
          </div>
        </div>
      )}

      {user.user_type === 2 && <Admin />}

      {/* Graph Section */}

      {user.user_type === 1 && <Heading text={'Sensor Data & Chart'} />}

      {user.user_type === 1 && <Realtime realtime={realtime} data={fullSet} />}
    </div>
  );
};

export default DasboardHome;
