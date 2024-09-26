import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Root';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import store from "./store/store";

import { Provider } from 'react-redux'
import Root from './Root';
import Login from './pages/Login';
import ProtectedRoutes from './features/auth/ProtectedRoutes';
import Dashboard from './pages/Dashboard';
import "./App.css"
import NewProtectedComponent from './pages/Analysing';
import Analysing from './pages/Analysing';
import DashboardV2 from './pages/DashboardV2';
import AlarmsPage from './pages/AlarmsPage';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children:[
      {
        path: "home",
        element: <Home/>,
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "protected",
        element: <ProtectedRoutes/>,
        children:[
          {
            path:"dashboard",
            element: <DashboardV2/>
          },
          {
            path:"newprot",
            element: <Analysing/>
          },
          {
            path:"alarms",
            element: <AlarmsPage/>
          }
        ]
      },
      {
        path: "/views",
        element: <h1>Views</h1>
      }
    ],
  },

]);

root.render(
    <div className='App-header'>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
