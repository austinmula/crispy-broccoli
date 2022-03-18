import { useSelector } from 'react-redux';
import CombinedChart from '../charts/CombinedChart';
import HumidityChart from '../charts/HumidityChart';
import TempChart from '../charts/TempChart';
import Admin from '../components/dashboard-components/Admin';
import Card from '../components/dashboard-components/Card';
import Heading from '../components/dashboard-components/Heading';

const DasboardHome = () => {
  const { user } = useSelector((state) => state.auth);
  const data = ['Water Level', 'Temperature', 'Humidity'];
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                  soluta, sunt modi, magni nobis sapiente pariatur perferendis
                  saepe totam repellat vitae
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

      {user.user_type === 1 && (
        <div className=' my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
          {data.map((i) => (
            <Card key={i} i={i} />
          ))}
        </div>
      )}

      {/* Graph Section */}

      {user.user_type === 1 && <Heading text={'Graphs and Charts'} />}

      {user.user_type === 1 && (
        <div className='mt-4 grid grid-cols-1  lg:grid-cols-2 gap-3'>
          <div className='bg-white'>
            <HumidityChart />
          </div>
          <div className='bg-white'>
            <TempChart />
          </div>
          <div className='bg-white col-span-2'>
            <CombinedChart />
          </div>
        </div>
      )}
    </div>
  );
};

export default DasboardHome;
