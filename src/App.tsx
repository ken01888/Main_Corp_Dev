import * as React from 'react';
import {
  createBrowserRouter,

} from "react-router-dom";
import Login from './FRONTEND/Page/Login';
import SignUp from './FRONTEND/Page/Signup';
import TermsOfService from './FRONTEND/Page/TermsOfService';
import ClientPortal from './FRONTEND/Page/Principle_Dashboards/ClientPortal';
import PrincipleAccountDetails from './FRONTEND/Page/Principle_Dashboards/PrincipleAccountDetailsPage';
import PrincipleBillingDetails from './FRONTEND/Page/Principle_Dashboards/PrincipleBillingDetails';
import PrincipleServiceDetails from './FRONTEND/Page/Principle_Dashboards/PrincipleServiceDetails';
import StoreInventory from './FRONTEND/Page/Principle_Dashboards/StoreInventory';
import Support from './FRONTEND/Page/Support';
import InventoryCheck from './FRONTEND/Page/Principle_Dashboards/QRCode/Inventory';

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