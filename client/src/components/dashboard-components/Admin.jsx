import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { fetchallusers, reset } from '../../features/users/usersSlice';
import CardUsers from './CardUsers';
import { useSelector, useDispatch } from 'react-redux';
import Error from '../../custom-components/Error';
import BarChart from '../../charts/BarChart';
import Heading from './Heading';

const labels = ['Name', 'Email', 'RegistedAt'];

const Admin = () => {
  const dispatch = useDispatch();
  const { users, message, isError } = useSelector((state) => state.users);
  const [Errmsg, setErrmsg] = useState('');
  // const [summary, setSummary] = useState([]);
  // const [loading, setLoading] = useState(true);

  // async function getSummary() {
  //   setLoading(true);
  //   const response = await axios.get('http://localhost:4001/api/users/summary');

  //   setSummary(response.data);

  //   console.log(summary);
  //   setLoading(false);
  // }

  // useEffect(() => {
  //   // getSummary();
  // }, [loading]);

  // setLoading(false);

  useEffect(() => {
    if (isError) {
      setErrmsg(message.error);
    }

    dispatch(fetchallusers());
    return () => {
      dispatch(reset());
    };
  }, [dispatch, isError, message.error]);

  return (
    <>
      <div className='my-4'>{isError && <Error errormessage={Errmsg} />}</div>
      {/* {Admin View Componet start} */}
      <div className=' my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2'>
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
                {users.slice(0, 2).map((user) => (
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
      <Heading text={'User Registration Rate'} />
      <div className='my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
        <div className='col-span-3 bg-white p-3'>
          <BarChart />
        </div>
      </div>

      {/* Admin View Component End */}
    </>
  );
};

export default Admin;
