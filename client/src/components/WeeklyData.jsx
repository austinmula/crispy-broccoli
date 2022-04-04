import axios from 'axios';
import React, { useEffect, useState } from 'react';
import moment from 'moment';

const labels1 = [
  'Week Starting',
  'Maximum Temperature',
  'Minimum Temperature',
  'Average Temperature',
];

const labels2 = [
  'Week Starting',
  'Maximum Humidity',
  'Minimum Humidity',
  'Average Humidity',
];

const labels3 = [
  'Week Starting',
  'Maximum Water Level',
  'Minimum Water Level',
  'Average Water Level',
];

const WeeklyData = () => {
  const [hdata, setHdata] = useState([]);

  useEffect(() => {
    const getHourlyData = async () => {
      const response = await axios.get('http://localhost:4001/api/data/weekly');
      if (response.data) {
        setHdata(response.data);
      }
    };

    getHourlyData();
  }, []);

  return (
    <>
      <div className='bg-gray-700 shadow-md mt-4'>
        <div className='flex justify-between px-8 py-5'>
          <h1 className='text-2xl font-mono text-gray-100'>
            Weekly Temperature Analysis
          </h1>
        </div>

        <div className='bg-gray-100 col-span-3 row-span-2'>
          {hdata.length > 0 ? (
            <table className='min-w-full' id='weekly-temp-table'>
              <thead className='bg-gray-300'>
                <tr>
                  {labels1.map((l, i) => (
                    <th
                      key={i}
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider'
                    >
                      {l}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className='divide-y divide-gray-300'>
                {hdata.map((item) => (
                  <tr key={item.week}>
                    <td className='px-6 py-2 whitespace-nowrap'>
                      {moment(item.week).format('LLL')}
                    </td>
                    <td className='px-6 py-2 whitespace-nowrap'>
                      {item.max_temp}
                    </td>
                    <td className='px-6 py-2 whitespace-nowrap'>
                      {item.min_temp}
                    </td>
                    <td className='px-6 py-2 whitespace-nowrap'>
                      {item.avg_temp}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <>No data</>
          )}
        </div>
      </div>
      <div className='bg-gray-700 shadow-md mt-4'>
        <div className='flex justify-between px-8 py-5'>
          <h1 className='text-2xl font-mono text-gray-100'>
            Weekly Humidity Analysis
          </h1>
        </div>

        <div className='bg-gray-100 col-span-3 row-span-2'>
          {hdata.length > 0 ? (
            <table className='min-w-full' id='weekly-humid-table'>
              <thead className='bg-gray-300'>
                <tr>
                  {labels2.map((l, i) => (
                    <th
                      key={i}
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider'
                    >
                      {l}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className='divide-y divide-gray-300'>
                {hdata.map((item) => (
                  <tr key={item.week}>
                    <td className='px-6 py-2 whitespace-nowrap'>
                      {moment(item.week).format('LLL')}
                    </td>
                    <td className='px-6 py-2 whitespace-nowrap'>
                      {item.max_humid}
                    </td>
                    <td className='px-6 py-2 whitespace-nowrap'>
                      {item.min_humid}
                    </td>
                    <td className='px-6 py-2 whitespace-nowrap'>
                      {item.avg_humid}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <>No data</>
          )}
        </div>
      </div>
      <div className='bg-gray-700 shadow-md mt-4'>
        <div className='flex justify-between px-8 py-5'>
          <h1 className='text-2xl font-mono text-gray-100'>
            Weekly Water Level Analysis
          </h1>
        </div>

        <div className='bg-gray-100 col-span-3 row-span-2'>
          {hdata.length > 0 ? (
            <table className='min-w-full' id='weekly-wl-table'>
              <thead className='bg-gray-300'>
                <tr>
                  {labels3.map((l, i) => (
                    <th
                      key={i}
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider'
                    >
                      {l}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className='divide-y divide-gray-300'>
                {hdata.map((item) => (
                  <tr key={item.week}>
                    <td className='px-6 py-2 whitespace-nowrap'>
                      {moment(item.week).format('LLL')}
                    </td>
                    <td className='px-6 py-2 whitespace-nowrap'>
                      {item.max_WL}
                    </td>
                    <td className='px-6 py-2 whitespace-nowrap'>
                      {item.min_WL}
                    </td>
                    <td className='px-6 py-2 whitespace-nowrap'>
                      {item.avg_WL}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <>No data</>
          )}
        </div>
      </div>
    </>
  );
};

export default WeeklyData;
