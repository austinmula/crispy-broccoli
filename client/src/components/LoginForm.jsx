import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Error from '../custom-components/Error';
import Loader from '../custom-components/Loader';
import { login, reset } from '../features/auth/authSlice';

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isError, isSuccess, user, message, isLoading } = useSelector(
    (state) => state.auth
  );
  const [errormessage, setErrormessage] = useState('');
  const [data, setData] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(login(data));
  };

  useEffect(() => {
    if (isError) {
      setErrormessage(message.error);
    }

    if (isSuccess || user) {
      navigate('/dashboard');
    }

    const timeout = setTimeout(() => {
      dispatch(reset());
    }, 3000);

    return () => clearTimeout(timeout);
  }, [dispatch, isError, isSuccess, message, navigate, user]);

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

  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <div>
        <h1 className='text-4xl px-6 py-4 text-bold text-gray-900 text-center'>
          Sign-In
        </h1>
        {isError && <Error errormessage={errormessage} />}
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
            <label htmlFor='password' className='block mb-2 text-sm'>
              Password
            </label>
            <input
              id='password'
              name='password'
              type='password'
              autoComplete='current-password'
              required
              className='appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm'
              placeholder='Enter Password'
              onChange={handleChange}
            />
          </div>

          <div className='pt-4'>
            <button
              type='submit'
              className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
            >
              <span className='absolute left-0 inset-y-0 flex items-center pl-3'>
                <svg
                  className='h-5 w-5 text-blue-500 group-hover:text-blue-400'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  aria-hidden='true'
                >
                  <path
                    fillRule='evenodd'
                    d='M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z'
                    clipRule='evenodd'
                  />
                </svg>
              </span>
              Sign in
            </button>
          </div>
        </form>
        <div className='text-center text-md pb-6'>
          Don't Have an Account? <Link to={'/register'}>Sign Up</Link>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
