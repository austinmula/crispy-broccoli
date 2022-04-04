import React, { useState, useEffect } from 'react';
// import XLSX from 'xlsx';
import * as XLSX from 'xlsx/xlsx.mjs';
import moment from 'moment';
import axios from 'axios';

const Tables = () => {
  useEffect(() => {
    const getSensorData = async () => {
      const response = await axios.get('http://localhost:4001/api/data');
      if (response.data) {
        setData(response.data);
      }
    };
    getSensorData();
  }, []);

  const getSensorFullData = async () => {
    const response = await axios.get('http://localhost:4001/api/data/full');
    if (response.data) {
      const worksheet = XLSX.utils.json_to_sheet(response.data);
      const workBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workBook, worksheet, 'sensors');

      // buffer
      XLSX.write(workBook, { bookType: 'xlsx', type: 'buffer' });
      // generate binary string
      XLSX.write(workBook, { bookType: 'xlsx', type: 'binary' });

      XLSX.writeFile(workBook, 'sensordata.xlsx');
    }
  };

  const [data, setData] = useState([]);
  // const [fulldata, setDataFull] = useState([]);

  const labels = [
    'Time',
    'Tempearature',
    'Humidity',
    'Water Level',
    'Motion',
    'Float Switch',
  ];
  const handleClick = () => {
    getSensorFullData();
  };
  return (
    <div className='bg-gray-700 shadow-md mt-4'>
      <div className='flex justify-between px-8 py-5'>
        <h1 className='text-3xl font-mono text-gray-100'>Sensor Data</h1>
        <button
          onClick={handleClick}
          className='font-thin py-2 px-4 rounded bg-blue-500 text-white mr-6'
        >
          Export .xlsx
        </button>
      </div>
      {/* <Heading text={'Sensor Data Table'} /> */}
      {/* <HourlyData /> */}
      <div className='bg-gray-100 col-span-3 row-span-2'>
        {data.length > 0 ? (
          <table className='min-w-full' id='reg-rate-table'>
            <thead className='bg-gray-300'>
              <tr>
                {labels.map((l, i) => (
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
              {data.map((item) => (
                <tr key={item.record_id}>
                  <td className='px-6 py-2 whitespace-nowrap'>
                    {moment(item.created_at).format('MMMM Do YYYY, h:mm:ss a')}
                  </td>
                  <td className='px-6 py-2 whitespace-nowrap'>
                    {item.temperature}
                  </td>
                  <td className='px-6 py-2 whitespace-nowrap'>
                    {item.humidity}
                  </td>
                  <td className='px-6 py-2 whitespace-nowrap'>{item.wl}</td>
                  <td className='px-6 py-2 whitespace-nowrap'>{item.motion}</td>
                  <td className='px-6 py-2 whitespace-nowrap'>{item.fs}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <>No data</>
        )}
      </div>
    </div>
  );
};

export default Tables;
