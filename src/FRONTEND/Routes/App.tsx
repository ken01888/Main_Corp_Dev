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
import PrincipleServiceDetails from './Page/Principle Dashboards/PrincipleServiceDetails';
import SignUp from './Page/Signup';
import TermsOfService from './Page/TermsOfService';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,

  },
  {
    path: "/login",
    element: <Login />,

  },
  {
    path: "/signup",
    element: <SignUp />,

  },
  {
    path: "/termsofservice",
    element: <TermsOfService />,

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
      },
      {
        path: "services/:id",
        element: <PrincipleServiceDetails />
      }

    ]

  },
  {
    path: "/access",
    element: <h1>registration <Link to='/dashboard'>Dashboard</Link></h1>,

  },
]);

export default router;