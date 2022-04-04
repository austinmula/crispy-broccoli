import React from 'react';

import { Routes, Route } from 'react-router-dom';
import Dashboard from './Layouts/Dashboard';
import DasboardHome from './pages/DashboardHome';
import Landingpage from './pages/Landingpage';
import FormLayout from './Layouts/FormLayout';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Profile from './pages/Profile';
import Tables from './pages/Tables';
import Users from './pages/Users';
import Report from './pages/Report';
import Realtime from './pages/Realtime';

const RoutesTree = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Landingpage />}></Route>
        <Route element={<FormLayout />}>
          <Route path='login' element={<LoginForm />}></Route>
          <Route path='register' element={<RegisterForm />}></Route>
        </Route>
        <Route path='dashboard' element={<Dashboard />}>
          <Route index element={<DasboardHome />} />
          <Route path='profile' element={<Profile />} />
          <Route path='tables' element={<Tables />} />
          <Route path='users' element={<Users />} />
          <Route path='reports' element={<Report />} />
          <Route path='realtime' element={<Realtime />} />
        </Route>
      </Routes>
    </>
  );
};

export default RoutesTree;
