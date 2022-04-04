import React from 'react';

const LocationSummary = ({ summary }) => {
  return (
    <div className='bg-gray-100 col-span-3 '>
      {summary.length > 0 ? (
        <table className='min-w-full' id='location-table'>
          <thead className='bg-gray-600'>
            <tr>
              <th
                scope='col'
                className='px-6 py-2 text-left text-xs font-medium text-gray-100 uppercase tracking-wider'
              >
                County
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
            {summary.map((item) => (
              <tr key={item.county}>
                <td className='px-6 py-2 whitespace-nowrap'>{item.county}</td>
                <td className='px-6 py-2 whitespace-nowrap'>
                  {item.count} Users
                </td>
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

export default LocationSummary;
