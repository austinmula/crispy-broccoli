import axios from 'axios';
import React, { useEffect, useState } from 'react';

const DetailedTable = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getTableData = async () => {
      const response = await axios.get(
        'http://localhost:4001/api/users/profiledetailed'
      );
      if (response.data) {
        setData(response.data);
      }
    };
    getTableData();
  }, []);
  const labels = [
    'Email',
    'Name',
    'County',
    'Constituency',
    'Postal Adress',
    'Phone Number',
  ];
  return (
    <div className='bg-gray-100 '>
      {data.length > 0 ? (
        <table className='min-w-full' id='detailed-table'>
          <thead className='bg-gray-500'>
            <tr>
              {labels.map((i) => (
                <th
                  key={i}
                  scope='col'
                  className='px-6 py-2 text-left text-xs font-medium text-gray-100 uppercase tracking-wider'
                >
                  {i}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-300'>
            {data
              // .sort(() => 0.5 - Math.random())
              .slice(0, 12)
              .map((item) => (
                <tr key={item.user_id}>
                  <td className='px-6 py-2 whitespace-nowrap'>{item.email}</td>
                  <td className='px-6 py-2 whitespace-nowrap'>
                    {item.user_name}
                  </td>
                  <td className='px-6 py-2 whitespace-nowrap'>{item.county}</td>
                  <td className='px-6 py-2 whitespace-nowrap'>
                    {item.constituency}
                  </td>
                  <td className='px-6 py-2 whitespace-nowrap'>
                    {item.postal_address}
                  </td>
                  <td className='px-6 py-2 whitespace-nowrap'>
                    {item.phone_num}
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

export default DetailedTable;
