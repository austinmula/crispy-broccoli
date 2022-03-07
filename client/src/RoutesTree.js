import React from 'react';

import { Routes, Route } from 'react-router-dom';
import Dashboard from './Layouts/Dashboard';
import DasboardHome from './pages/DashboardHome';
import Landingpage from './pages/Landingpage';
import FormLayout from './Layouts/FormLayout';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

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
        </Route>
      </Routes>
    </>
  );
};

export default RoutesTree;
