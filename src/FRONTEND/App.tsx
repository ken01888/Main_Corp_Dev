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
import StoreInventory from './Page/Principle_Dashboards/StoreInventory';


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
    loader: async () => {
      const dataReply = await fetch(`http://localhost:8000/getPrincipleInformation`)
      const newData = await dataReply.json()
      const newUserData = JSON.stringify(newData)
      window.localStorage.setItem('user', newUserData)
      return dataReply.status
    },

    children: [

      {
        path: "account",
        element: <PrincipleAccountDetails />,
        loader: async () => {
          const user: any = window.localStorage.getItem('user')
          return JSON.parse(user)
        }



      },
      {
        path: "billing",
        element: <PrincipleBillingDetails />
      },
      {
        path: "services",
        element: <PrincipleServiceDetails />
      }
      ,
      {
        path: "store",
        element: <StoreInventory />,
        loader: async () => {
          const dataReply = await fetch(`http://localhost:8000/getStores`)
          const dataParse = await dataReply.json()
          return [dataParse]

        }
      }

    ]

  },
  // {
  //   path: "/access",
  //   element: <h1>registration <Link to='/dashboard'>Dashboard</Link></h1>,


]);

export default router;