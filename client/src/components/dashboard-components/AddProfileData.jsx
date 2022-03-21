import axios from 'axios';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getprofile } from '../../features/profile/profileSlice';

const AddProfileData = () => {
  const [data, setData] = useState({});
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newdata = { ...data, user_id: user.user_id };

    const response = await axios.post(`http://localhost:4001/api/users/`, {
      newdata,
    });

    dispatch(getprofile());
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    //Create an object for the current input field
    const currentInputFieldData = {
      [name]: value,
    };

    //Merge the data object with the current input field data object
    const updatedData = {
      ...data,
      ...currentInputFieldData,
    };
    setData(updatedData);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className=''>
        <div className='w-full mb-6 md:mb-0'>
          <label
            className='block mb-2 text-sm font-medium text-gray-900 '
            htmlFor='county'
          >
            County
          </label>
          <div className='relative'>
            <select
              className='block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='county'
              name='county'
              onChange={handleChange}
              defaultValue='Nairobi'
              required
            >
              <option>Nairobi</option>
              <option>Kiambu</option>
              <option>Kisumu</option>
              <option>Mombasa</option>
              <option>Kakamega</option>
              <option>Other</option>
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

        <div>
          <label
            htmlFor='constituency'
            className='block mb-2 text-sm font-medium text-gray-900'
          >
            Constituency
          </label>
          <input
            type='text'
            name='constituency'
            id='constituency'
            required
            onChange={handleChange}
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
            placeholder='enter constituency name'
          />
        </div>

        <div>
          <label
            htmlFor='postal_address'
            className='block mb-2 text-sm font-medium text-gray-900'
          >
            Postal_Address
          </label>
          <input
            type='text'
            name='postal_address'
            id='postal_address'
            required
            onChange={handleChange}
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
            placeholder='enter PO BOX and Code'
          />
        </div>

        <div>
          <label
            htmlFor='phone_num'
            className='block mb-2 text-sm font-medium text-gray-900'
          >
            Phone_Number
          </label>
          <input
            type='text'
            name='phone_num'
            id='phone_num'
            maxLength={10}
            minLength={10}
            required
            onChange={handleChange}
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
            placeholder='enter phone number'
          />
        </div>
        <div className='py-3'>
          <button
            type='submit'
            className='w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500  sm:text-sm'
          >
            Add Data
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProfileData;
