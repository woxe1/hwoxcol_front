import React, { ButtonHTMLAttributes, MouseEventHandler, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, Outlet } from 'react-router-dom';
import loginService from '../services/AuthService';
import PointService from '../services/PointService';
import { setAuth } from '../store/login';
import { Button, TextField } from '@mui/material';
import AuthService from '../services/AuthService';

const Login = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const isAuth = useSelector((state: any) => state.auth.is_auth);
    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const m  = await loginService.login(username, password);
            if (m.status === 200) {
                localStorage.setItem("access_token", m.data["accessToken"]);
                dispatch(setAuth(true));
            }
            
        } catch (error) {
            console.error('Error during login:', error);
        }
    }
    useEffect(() => {
        AuthService.check()
          .then(m => {
            if (m.status === 200) {
              dispatch(setAuth(true));
            }
          })
          .catch(error => console.error("error during check login", error))
      
      }, [dispatch]);

    const checkLogin = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        try{
            const m = await AuthService.check()
            if (m.status === 200) {
                dispatch(setAuth(true));
            }
        }catch(error){
            console.error("error during check login", error)
        }
    }
    if (isAuth){
        return (
            <div>
                <Navigate to="/home" />
            </div>
        )
    }else{
        return (
            <div className='login-form'>
                <form onSubmit={handleLogin}>
                    <label >
                        <TextField InputLabelProps={{style:{color:'white'}}}  id="login-field" label="E-mail" variant="filled" value={username} onChange={e =>setUsername(e.target.value)}/>
                    </label>
                    <label>
                        <TextField InputLabelProps={{style:{color:'white'}}}  id="password-field" label="Password" variant="filled" value={password} onChange={e =>setPassword(e.target.value)}/>
                    </label>
                    <div>
                        <Button id='login-btn' type='submit' variant="outlined">Login</Button>
                    </div>



                    {/* <input type="submit" value="Login" /> */}
                </form>
            </div>
        );
    }
    
}

export default Login;
