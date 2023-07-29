import * as React from 'react';
import {
  createBrowserRouter,

} from "react-router-dom";
import Login from './FRONTEND/PAGE/PUBLIC/Login';
import SignUp from './FRONTEND/PAGE/PUBLIC/Signup';
import TermsOfService from './FRONTEND/PAGE/PUBLIC/TermsOfService';
import ClientPortal from './FRONTEND/PAGE/PRIVATE/ClientPortal';
import PrincipleAccountDetails from './FRONTEND/PAGE/PRIVATE/PrincipleAccountDetailsPage';
import PrincipleBillingDetails from './FRONTEND/PAGE/PRIVATE/PrincipleBillingDetails';
import PrincipleServiceDetails from './FRONTEND/PAGE/PRIVATE/PrincipleServiceDetails';
import StoreInventory from './FRONTEND/PAGE/PRIVATE/StoreInventory';
import Support from './FRONTEND/PAGE/PUBLIC/Support';
import InventoryCheck from './FRONTEND/PAGE/PRIVATE/QRCode/Inventory';

const App = createBrowserRouter([
  {
    path: "/",
    element: <Login />,

  },

  {
    path: "signup",
    element: <SignUp />,

  },
  {
    path: "termsofservice",
    element: <TermsOfService />,

  },
  {
    path: "support",
    element: <Support/>,

  },


  {
    path: "inventory_check",
    element: <InventoryCheck />,

  },

  {
    path: '/principle',
    element: <ClientPortal />,
    children: [

      {
        path: "account",
        element: <PrincipleAccountDetails />,
      },
      {
        path: "store",
        element: <StoreInventory />,

      },
    //   {
    //     path: "billing",
    //     element: <PrincipleBillingDetails />
    //   },
    //   {
    //     path: "services",
    //     element: <PrincipleServiceDetails />
    //   }
    //   ,
    

    ]

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
    // {
    //   path: "store",
    //   element: <StoreInventory />,

    // }


  // {
  //   path: "/access",
  //   element: <h1>registration <Link to='/dashboard'>Dashboard</Link></h1>,


]);

export default App;