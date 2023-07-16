import * as React from 'react';
import {
  createBrowserRouter,

} from "react-router-dom";
import * as fetch from 'isomorphic-fetch';

import Home from './Page/Home';
import Login from './Page/Login';
import SignUp from './Page/Signup';
import TermsOfService from './Page/TermsOfService';
// import Login from './Page/Login'
import ClientPortal from './Page/Principle_Dashboards/ClientPortal';
import PrincipleAccountDetails from './Page/Principle_Dashboards/PrincipleAccountDetailsPage';
import PrincipleBillingDetails from './Page/Principle_Dashboards/PrincipleBillingDetails';
import PrincipleServiceDetails from './Page/Principle_Dashboards/PrincipleServiceDetails';


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
    path: '/principle',
    element: <ClientPortal />,
    // loader: async () => {
    //   const dataReply = await fetch(`http://localhost:9000/testing1`)
    //   console.log(dataReply)
    //   return 1
    // },

    children: [
      
      {
        path: "account",
        element: <PrincipleAccountDetails />,
        // loader: async () => {
        //   const dataReply = await fetch(`http://localhost:9000/client_portal/getPrincipleInformation`)
        //   const newData = await dataReply.json()
        //   return newData
        // },


      },
      {
        path: "billing",
        element: <PrincipleBillingDetails />
      },
      {
        path: "services",
        element: <PrincipleServiceDetails />
      }
    ]

  },
  // {
  //   path: "/access",
  //   element: <h1>registration <Link to='/dashboard'>Dashboard</Link></h1>,


]);

export default router;