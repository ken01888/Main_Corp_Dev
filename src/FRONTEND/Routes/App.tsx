import * as React from 'react';
import {Button,Row,Col} from 'antd'
import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Home from './Page/Home'
import Login from './Page/Login'
import ClientPortal from './Page/ClientPortal';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
   
  },
  {
    path:'/clientportal/?:id',
    element: <ClientPortal/>,

  },
  {
    path: "/login",
    element: <Login/>,
   
  },

  {
    path: "/access",
    element: <h1>registration <Link to='/dashboard'>Dashboard</Link></h1>,
   
  },
]);

export default router;