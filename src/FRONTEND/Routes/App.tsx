import * as React from 'react';
import {
  createBrowserRouter,
  Link,
} from "react-router-dom";
import Home from './Page/Home'
import Login from './Page/Login'
import ClientPortal from './Page/Principle Dashboards/ClientPortal';
import PrincipleAccountDetails from './Page/Principle Dashboards/PrincipleAccountDetailsPage';
import PrincipleBillingDetails from './Page/Principle Dashboards/PrincipleBillingDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,

  },
  {
    path: 'principle_dashboard',
    element: <ClientPortal />,
    children: [
      {
        path: "account/:id",
        element: <PrincipleAccountDetails />
      }
      , 
      {
        path: "billing/:id",
        element: <PrincipleBillingDetails />
      }

    ]

  },
  {
    path: "/access",
    element: <h1>registration <Link to='/dashboard'>Dashboard</Link></h1>,

  },
]);

export default router;