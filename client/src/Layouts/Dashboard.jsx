import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from '../components/dashboard-components/SideBar';
import Mobile from '../components/dashboard-components/Mobile';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout, reset } from '../features/auth/authSlice';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [showSidebar, setShowSidebar] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  const handleLogOut = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/');
  };

  return (
    <div className='relative max-h-screen md:flex'>
      {/* Starts Here mobile menu */}
      <Mobile showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      {/* sidebar */}
      <SideBar showSidebar={showSidebar} handleLogOut={handleLogOut} />

      {/* main-content */}
      <div className='px-6 flex-1 overflow-auto bg-gray-200'>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
