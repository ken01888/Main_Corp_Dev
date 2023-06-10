import * as React from 'react';
import {Button,Row,Col} from 'antd'
import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Hello At home <Link to='/registration'>Dashboard</Link></h1>,
   
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