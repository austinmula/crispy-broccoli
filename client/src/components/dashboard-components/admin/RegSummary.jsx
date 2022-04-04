import React from 'react';
import moment from 'moment';

const RegSummary = ({ summary }) => {
  return (
    <div className='bg-gray-100 col-span-3 row-span-2'>
      {summary.length > 0 ? (
        <table className='min-w-full' id='reg-rate-table'>
          <thead className='bg-gray-700'>
            <tr>
              <th
                scope='col'
                className='px-6 py-2 text-left text-xs font-medium text-gray-100 uppercase tracking-wider'
              >
                Week
              </th>
              <th
                scope='col'
                className='px-6 py-2 text-left text-xs font-medium text-gray-100 uppercase tracking-wider'
              >
                Date
              </th>
              <th
                scope='col'
                className='px-6 py-2 text-left text-xs font-medium text-gray-100 uppercase tracking-wider'
              >
                Count
              </th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-300'>
            {summary.map((item, index) => (
              <tr key={item.Week}>
                <td className='px-6 py-2 whitespace-nowrap'>
                  Week {index + 1}
                </td>
                <td className='px-6 py-2 whitespace-nowrap'>
                  {moment(item.Week).format('MMM Do YYYY')}
                </td>
                <td className='px-6 py-2 whitespace-nowrap'>{item.count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <>No data</>
      )}
    </div>
  );
};

export default RegSummary;
