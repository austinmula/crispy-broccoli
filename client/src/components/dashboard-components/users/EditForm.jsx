import axios from 'axios';
import React, { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import {
  edituserdetails,
  fetchallusers,
  reset,
} from '../../../features/users/usersSlice';

const EditForm = ({ user }) => {
  const [name, setUname] = useState('');
  const [email, setEmail] = useState('');
  const [user_type, setType] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    const item = { name, email, user_type, user_id: user.user_id };
    e.preventDefault();
    dispatch(edituserdetails(item));
    // dispatch(reset());
    // dispatch(fetchallusers());
    console.log(item);
  };

  useEffect(() => {
    const getData = async () => {
      let temp = JSON.parse(sessionStorage.getItem('user'));
      const response = await axios.get(
        `http://localhost:4001/api/users/${user.user_id}`,
        { headers: { token: temp.token } }
      );
      if (response.data) {
        setEmail(response.data[0].email);
        setUname(response.data[0].user_name);
        setType(response.data[0].user_type);
      }
      console.log(response.data[0].user_id);
    };
    getData();
  }, [user.user_id]);

  return (
    <div>
      <form onSubmit={handleSubmit} className=''>
        <div>
          <label
            htmlFor='username'
            className='block my-2 text-sm font-medium text-gray-900'
          >
            Username
          </label>
          <input
            type='text'
            name='name'
            id='name'
            value={name}
            onChange={(e) => setUname(e.target.value)}
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
          />
        </div>

        <div>
          <label
            htmlFor='postal_address'
            className='block my-2 text-sm font-medium text-gray-900'
          >
            Email
          </label>
          <input
            type='email'
            name='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
          />
        </div>

        <div className='w-full mb-6 md:mb-0'>
          <label
            className='block my-2 text-sm font-medium text-gray-900 '
            htmlFor='user_type'
          >
            User Type
          </label>
          <div className='relative'>
            <select
              className='block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='user_type'
              name='user_type'
              defaultValue={user_type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value={1}>User</option>
              <option value={2}>Admin</option>
            </select>
            <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
              <svg
                className='fill-current h-4 w-4'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
              >
                <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
              </svg>
            </div>
          </div>
        </div>

        <div className='py-3'>
          <button
            type='submit'
            className='w-full block rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
          >
            Edit Data
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditForm;
