import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { fetchallusers, reset } from '../../../features/users/usersSlice';
import CardUsers from './CardUsers';
import { useSelector, useDispatch } from 'react-redux';
import Error from '../../../custom-components/Error';
import UserRegChart from '../../../charts/UserRegChart';
import axios from 'axios';
import LocationChart from '../../../charts/LocationChart';
import Heading from '../Heading';

const labels = ['Name', 'Email', 'RegistedAt'];

const Admin = () => {
  const dispatch = useDispatch();
  const { users, message, isError } = useSelector((state) => state.users);
  const [Errmsg, setErrmsg] = useState('');
  const [locationsummary, setLocationSummary] = useState([]);
  const [userDatasummary, setUserdataSummary] = useState([]);

  useEffect(() => {
    if (isError) {
      setErrmsg(message.error);
    }

    dispatch(fetchallusers());
    return () => {
      dispatch(reset());
    };
  }, [dispatch, isError, message.error]);

  useEffect(() => {
    const fetchSummary = async () => {
      const response = await axios.get(
        'http://localhost:4001/api/users/summary'
      );
      console.log(response.data);
      setUserdataSummary(response.data);
    };
    fetchSummary();
  }, []);

  useEffect(() => {
    const fetchSummary = async () => {
      const response = await axios.get(
        'http://localhost:4001/api/users/distribution'
      );
      console.log(response.data);
      setLocationSummary(response.data);
    };
    fetchSummary();
  }, []);

  return (
    <>
      <div className='my-4'>{isError && <Error errormessage={Errmsg} />}</div>

      <p className='text-md font-serif'>
        Analysis of the user Data. Distribution of users based on location and
        the number of new users per week
      </p>

      <div className='my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3'>
        <div className='col-span-3 bg-white p-2 shadow-md'>
          <UserRegChart summary={userDatasummary} />
        </div>
        <div className='col-span-2 bg-white p-2 shadow-md'>
          <LocationChart summary={locationsummary} />
        </div>
      </div>

      {/* Second part */}
      <div className=' my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3'>
        <div className='col-span-2'>
          <CardUsers number={users?.length} />
        </div>
        <div className='bg-white col-span-3'>
          <h3 className='text-xl font-medium py-1 text-center'>
            Newly Registered Users
          </h3>
          <table className='min-w-full divide-y divide-gray-200 mt-3'>
            <thead className='bg-gray-300'>
              <tr>
                {labels.map((label, index) => (
                  <th
                    key={index}
                    scope='col'
                    className='px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                  >
                    {label}
                  </th>
                ))}
              </tr>
            </thead>
            {users.length > 0 ? (
              <tbody className='bg-white divide-y divide-gray-200'>
                {users.slice(0, 3).map((user) => (
                  <tr key={user.user_id}>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      {user.user_name}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      {user.email}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      {moment(user.created_at).format('MMMM Do YYYY, h:mm')}
                    </td>
                  </tr>
                ))}
              </tbody>
            ) : null}
          </table>
        </div>
      </div>
    </>
  );
};

export default Admin;
