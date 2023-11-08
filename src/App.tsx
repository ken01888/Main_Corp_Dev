import * as React from 'react';
import {
  createBrowserRouter,

} from "react-router-dom";
import HomePage from './FRONTEND/Page/Community/Home';
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
import NutritionalInformation from './FRONTEND/Page/Partner/QRCode/NutritionalInformation';
import LogIn from './FRONTEND/Page/Community/LoginPage';
import BolaManual from './FRONTEND/Page/Partner/BolaManual';

const App = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,

  },
  {
    path: "/login",
    element: <LogIn />,

  },

  {
    path: "privacypolicy",
    element: <PrivacyPolicy />,

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
    path: "nutrients",
    element: <NutritionalInformation />,

  },
  {
    path: "inventorycheck",
    element: <InventoryCheck />,

  },

  {
    path: "store",
    element: <StoreInventory />,

  },






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

  },

  // {
  //   path: '/principle',
  //   element: <ClientPortal />
  // },

    {
      path: 'bolamanual',
      element: <BolaManual />
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

      },
      {
        path: 'bolamanual',
        element: <BolaManual />
      },



    ]

  },






]);

export default App;