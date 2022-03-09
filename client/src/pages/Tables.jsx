import React from 'react';
import Heading from '../components/dashboard-components/Heading';

const Tables = () => {
  return (
    <div>
      <Heading text={'Sensor Data Table'} />
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
                      Timestamp
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                    >
                      Temperature
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                    >
                      Humidity
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                    >
                      Water Level
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                    >
                      Pump Status
                    </th>
                  </tr>
                </thead>
                <tbody className='bg-white divide-y divide-gray-200'>
                  {/* {users.map((u) => (
                  <tr
                    key={u.user_id}
                    className={u.user_type === 2 ? 'bg-gray-100' : 'bg-gray-50'}
                  >
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <div className='flex items-center'>
                        <div>
                          <div className='text-sm font-medium text-gray-900'>
                            {u.user_name}
                          </div>
                          <div className='text-sm text-gray-500'>{u.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-green-600'>
                      {u.user_type === 1 ? 'User' : 'Admin'}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <div className='text-sm text-gray-900'>
                        {moment(u.created_at).startOf('hour').fromNow()}
                      </div>
                      <div className='text-sm text-gray-500'>
                        {moment(u.created_at).format('LLLL')}
                      </div>
                    </td>

                    <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
                      <button
                        className='text-indigo-600 hover:text-indigo-900'
                        onClick={() => setShowModal(true)}
                      >
                        {u.user_type !== 2 && 'Make Admin'}
                      </button>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
                      <button
                        onClick={() => handleDelete(u.user_id)}
                        className='text-red-600 hover:text-red-900'
                      >
                        {u.user_type !== 2 && 'Delete'}
                      </button>
                    </td>
                  </tr>
                ))} */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tables;
