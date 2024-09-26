import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PointService from './services/PointService';
import { setAuth } from './store/login';

function Root() {
  const isAuth = useSelector((state: any) => state.auth.is_auth);
  useEffect(() => {}, [isAuth]);

  if (isAuth) {
    return (
      <div>
        <Outlet />
      </div>
    );
  } else {
    return (
      <div>
        <Navigate to="/login" />
        <Outlet />
      </div>
    );
  }
}

export default Root;