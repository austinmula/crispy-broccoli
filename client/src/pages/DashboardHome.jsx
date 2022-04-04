import { useSelector } from 'react-redux';
import Admin from '../components/dashboard-components/admin/Admin';

import { useEffect, useState } from 'react';
import axios from 'axios';
import CombinedChart from '../charts/CombinedChart';
import moment from 'moment';
import HourlyData from '../components/HourlyData';
import HourlyChart from '../charts/HourlyChart';
import TempChart from '../charts/TempChart';
import WeeklyData from '../components/WeeklyData';

const DasboardHome = () => {
  const [fullSet, setFullSet] = useState([]);

  useEffect(() => {
    const getSensorData = async () => {
      const response = await axios.get('http://localhost:4001/api/data');
      if (response.data) {
        response.data
          .sort((a, b) => {
            return new Date(a.created_at) - new Date(b.created_at);
          })
          .forEach((item) => {
            item.created_at = moment(item.created_at).format('LT');
          });

        setFullSet(response.data);
      }
    };
    getSensorData();
  }, []);

  const [hdata, setHdata] = useState([]);

  useEffect(() => {
    const getHourlyData = async () => {
      const response = await axios.get('http://localhost:4001/api/data/hourly');
      if (response.data) {
        response.data.forEach((item) => {
          item.hour = moment(item.hour).format('LT');
        });
        setHdata(response.data);
      }
    };

    getHourlyData();
  }, []);

  const { user } = useSelector((state) => state.auth);

  return (
    <div>
      {user.user_type === 2 && <Admin />}
      {user.user_type === 1 && (
        <div className='bg-gray-50 shadow-md my-6 py-4'>
          <h1 className='text-lg font-semibold text-gray-600 pl-12'>
            Humidity, Temperature and Water Level (Last 50 Readings)
          </h1>
          <div className=' h-80 '>
            <CombinedChart data={fullSet} />
          </div>
        </div>
      )}

      {user.user_type === 1 && (
        <div className='flex gap-2 flex-col md:flex-row'>
          <div className='bg-gray-50 shadow-md my-4 py-2 md:w-2/5 w-full '>
            <h1 className='text-lg font-semibold text-gray-600 px-12 pb-4'>
              Temperature Graph Analysis
            </h1>
            <div className=' h-72 '>
              <HourlyChart data={hdata} />
            </div>
          </div>
          <div className='bg-gray-50 shadow-md my-4 py-2 md:w-3/5 w-full'>
            <h1 className='text-lg font-semibold text-gray-600 px-12 pb-4'>
              Water Level & Humidity Graph Analysis
            </h1>
            <div className=' h-72 '>
              {/* <HourlyChart data={hdata} /> */}
              <TempChart data={hdata} />
            </div>
          </div>
        </div>
      )}

      {user.user_type === 1 && <HourlyData />}
      {user.user_type === 2 && <WeeklyData />}
    </div>
  );
};

export default DasboardHome;

// {user.user_type === 1 && (
//   <div className='mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
//     {/* First Grid Item */}
//     <div className='py-8 pl-4 mb-6 rounded-md md:h-76 bg-gradient-to-bl from-green-500 to-cyan-600 text-gray-100 shadow-lg flex items-center col-span-2'>
//       <div className='grid grid-cols-1 sm:grid-cols-2'>
//         <div className='space-y-3 pb-3'>
//           <h1 className='text-4xl font-light '>
//             Hydroponics Data Dashboard
//           </h1>
//           <p className='font-bold text-md '>
//             Quick Data analysis for all your needs
//           </p>
//           <p className='text-sm leading-6'>
//             You can access the data from your hydroponics farm on here.
//             The data is from the water-level, humidity and temperature
//             sensors.
//           </p>
//         </div>
//         <div className='h-full w-full'>
//           <img
//             className='w-full h-full object-center object-cover'
//             src='/dashboard.png'
//             alt='dashboard'
//           />
//         </div>
//       </div>
//     </div>
//     {/* End of First Grid Item */}

//     <div className='rounded-md'>
//       <div className='flex items-center rounded-3xl shadow-md bg-gradient-to-b from-gray-500 to-gray-700 p-5 text-gray-100'>
//         <div className='w-16 h-16 rounded-full bg-gray-50 overflow-hidden'>
//           <img
//             className='h-full w-full object-cover object-center'
//             src='./user.png'
//             alt='user profile pic'
//           />
//         </div>
//         <div className='ml-6'>
//           <p className='font-bold text-md'>{user.user_name}</p>
//           <p className='font-md text-semibold '>{user.email}</p>
//         </div>
//       </div>
//       <div className='mt-3 bg-emerald-600 h-40 flex items-center justify-center rounded-md shadow-md '>
//         <p className='text-4xl font-light text-gray-50'>
//           {user?.user_type === 1 ? 'Farmer View' : 'Admin View'}
//         </p>
//       </div>
//     </div>
//   </div>
// )}
