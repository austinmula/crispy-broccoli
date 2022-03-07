import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from '../components/dashboard-components/SideBar';
import Mobile from '../components/dashboard-components/Mobile';

const Dashboard = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className='relative max-h-screen md:flex'>
      {/* Starts Here mobile menu */}
      <Mobile showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      {/* sidebar */}
      <SideBar showSidebar={showSidebar} />

      {/* main-content */}
      <div className='px-6 py-4 flex-1 overflow-auto'>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
