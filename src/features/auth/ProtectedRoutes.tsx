import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import PointService from '../../services/PointService';
import { setAuth } from '../../store/login';

const ProtectedRoutes = () => {
    const is_auth = useSelector((state: any) => state.auth.is_auth);
    const [isAuth, setIsAuth] = useState(false)
    const dispatch = useDispatch();
    if ( is_auth== true) {
        return (
            <div>
                <Outlet />
            </div>
        );
    } else {
        return (
            <div>
                <Navigate to="/login" />
            </div>
        );
    }
}

export default ProtectedRoutes;