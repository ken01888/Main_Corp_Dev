import * as React from 'react';
import {
  createBrowserRouter,

} from "react-router-dom";
import HomePage from './FRONTEND/Page/Community/Login';
import Registration from './FRONTEND/Page/Community/Signup';
import LegalService from './FRONTEND/Page/Community/TermsOfService';
import ClientPortal from './FRONTEND/Page/Partner/ClientPortal';
import PrincipleAccountDetails from './FRONTEND/Page/Partner/PrincipleAccountDetailsPage';
import PrincipleBillingDetails from './FRONTEND/Page/Partner/PrincipleBillingDetails';
import PrincipleServiceDetails from './FRONTEND/Page/Partner/PrincipleServiceDetails';
import StoreInventory from './FRONTEND/Page/Partner/StoreInventory';
import ContactSupport from './FRONTEND/Page/Community/Support';
import InventoryCheck from './FRONTEND/Page/Partner/QRCode/Inventory';
import PrivacyPolicy from './FRONTEND/Page/Community/PrivacyPolicy';
import InventoryAudit from './FRONTEND/Page/Partner/InventoryAudits';

const App = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,

  },

  {
    path: "signup",
    element: <Registration />,

  },

  {
    path: "support",
    element: <ContactSupport />,

  },


  {
    path: "inventory_check",
    element: <InventoryCheck />,

  },

  {
    path: "termsofservice",
    element: <LegalService />,

  },


  {
    path: "privacypolicy",
    element: <PrivacyPolicy />,

  },
  {
    path: "store",
    element: <StoreInventory />,

  },
  {
    path: "inventoryaudits",
    element: <InventoryAudit />,

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
      {
        path: "inventoryaudits",
        element: <InventoryAudit />,

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







]);

export default App;