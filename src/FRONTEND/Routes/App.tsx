import * as React from 'react';
import {Button,Row,Col} from 'antd'
import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Home from './Page/Home'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
   
  },
  {
    path: "/registration",
    element: <h1>registration <Link to='/'>home</Link></h1>,
   
  },
  {
    path: "/access",
    element: <h1>registration <Link to='/dashboard'>Dashboard</Link></h1>,
   
  },
]);

export default router;