import * as React from 'react';
import {
  createBrowserRouter,

} from "react-router-dom";
import HomePage from './FRONTEND/Page/Community/Login';
import Registration from './FRONTEND/Page/Community/Signup';
import LegalService from './FRONTEND/Page/Community/TermsOfService';
import ClientPortal from './FRONTEND/Page/Partner/ClientPortal';
import PrincipleAccountDetails from './FRONTEND/Page/Partner/PrincipleAccountDetailsPage';
import StoreInventory from './FRONTEND/Page/Partner/StoreInventory';
import ContactSupport from './FRONTEND/Page/Community/Support';
import InventoryCheck from './FRONTEND/Page/Partner/QRCode/Inventory';
import PrivacyPolicy from './FRONTEND/Page/Community/PrivacyPolicy';
import InventoryAudit from './FRONTEND/Page/Partner/InventoryAudits';
import Products from './FRONTEND/Page/Partner/Products';
import NutritionalFactPanel from './FRONTEND/Page/Partner/NutritionalFactPanel';

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
    path: "termsofservice",
    element: <LegalService />,

  },


  {
    path: "privacypolicy",
    element: <PrivacyPolicy />,

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
      {
        path: "products",
        element: <Products />,

      },
      {
        path: "nutrition",
        element: <NutritionalFactPanel />,
    
      }


    ]

  },






]);

export default App;