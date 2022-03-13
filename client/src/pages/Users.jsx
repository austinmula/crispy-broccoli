import React, { useEffect, useState } from 'react';
import Heading from '../components/dashboard-components/Heading';
import { fetchallusers, reset } from '../features/users/usersSlice';
import { useSelector, useDispatch } from 'react-redux';
import Error from '../custom-components/Error';
import moment from 'moment';

const Users = () => {
  const dispatch = useDispatch();
  const [Errmsg, setErrmsg] = useState('');
  const { users, message, isError } = useSelector((state) => state.users);

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
    <div>
      <Heading text='System Users' />
      <div className='my-4'>{isError && <Error errormessage={Errmsg} />}</div>
      <div className='flex flex-col'>
        <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
            <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
              <table className='min-w-full divide-y divide-gray-200'>
                <thead className='bg-gray-50'>
                  <tr>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                    >
                      Name
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                    >
                      Role
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                    >
                      Registered
                    </th>

                    <th scope='col' className='relative px-6 py-3'>
                      <span className='sr-only'>Edit</span>
                    </th>
                    <th scope='col' className='relative px-6 py-3'>
                      <span className='sr-only'>Delete</span>
                    </th>
                  </tr>
                </thead>
                {users.length > 0 ? (
                  <tbody className='bg-white divide-y divide-gray-200'>
                    {users.map((user) => (
                      <tr
                        key={user.user_id}
                        className={
                          user.user_type === 2 ? 'bg-gray-100' : 'bg-gray-50'
                        }
                      >
                        <td className='px-6 py-4 whitespace-nowrap'>
                          <div className='flex items-center'>
                            <div>
                              <div className='text-sm font-medium text-gray-900'>
                                {user.user_name}
                              </div>
                              <div className='text-sm text-gray-500'>
                                {user.email}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap'>
                          <span
                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              user.user_type === 1
                                ? 'bg-green-200 text-green-800'
                                : 'bg-red-200 text-red-800'
                            } `}
                          >
                            {user.user_type === 1 ? 'User' : 'Admin'}
                          </span>
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap'>
                          <div className='text-sm text-gray-900'>
                            {moment(user.created_at).fromNow()}
                          </div>
                          <div className='text-sm text-gray-500'>
                            {moment(user.created_at).format('LLLL')}
                          </div>
                        </td>

                        <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
                          <button
                            className='text-indigo-600 hover:text-indigo-900'
                            // onClick={() => setShowModal(true)}
                          >
                            {user.user_type !== 2 && 'Edit Details'}
                          </button>
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
                          <button
                            // onClick={() => handleDelete(user.user_id)}
                            className='text-red-600 hover:text-red-900'
                          >
                            {user.user_type !== 2 && 'Delete'}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                ) : (
                  <p className=' mt-5 text-lg w-full'>
                    No Content To show Here
                  </p>
                )}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
