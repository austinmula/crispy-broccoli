import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const [data, setData] = useState({});
  //const auth = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (data.password !== data.password2) {
      // toast.error('Passwords Do Not match');
    } else {
      //console.log(data);
      const name = data.name;
      const email = data.email;
      const password = data.password;

      const Formdata = { name, email, password };

      console.log(Formdata);
    }
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
    <>
      <div>
        <h1 className='text-4xl px-6 py-4 text-bold text-gray-900 text-center'>
          Sign-Up
        </h1>
        <form className='space-y-3 py-3' onSubmit={handleSubmit}>
          <div>
            <label htmlFor='email-address' className='block mb-2 text-sm'>
              Email address
            </label>
            <input
              id='email-address'
              name='email'
              type='email'
              required
              className='appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm'
              placeholder='Email address'
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor='username' className='block mb-2 text-sm'>
              Username
            </label>
            <input
              id='username'
              name='name'
              type='text'
              required
              className='appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm'
              placeholder='Enter Username'
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor='password' className='block mb-2 text-sm'>
              Password
            </label>
            <input
              id='password'
              name='password'
              type='password'
              autoComplete='current-password'
              minLength={6}
              required
              className='appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm'
              placeholder='Enter Password'
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor='password' className='block mb-2 text-sm'>
              Confirm Password
            </label>
            <input
              id='password2'
              name='password2'
              type='password'
              autoComplete='current-password'
              minLength={6}
              required
              className='appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm'
              placeholder='Enter Password Again'
              onChange={handleChange}
            />
          </div>
          <div className='pt-4'>
            <button
              type='submit'
              className='w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
            >
              Sign Up
            </button>
          </div>
        </form>
        <div className='text-center text-md pb-6'>
          Already Have an Account? <Link to={'/login'}>Sign In</Link>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
