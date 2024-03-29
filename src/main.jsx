import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './components/shop/shop';
import Home from './components/Layout/Home';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import cartLoader from './components/Loader/Cartloader';
import Checkout from './components/Checkout/Checkout';
import Signup from './components/Signup/Signup';
import Authprovider from './components/Providers/Authprovider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path:'/',
        element:<Shop></Shop>
      },
      {
        path:'/order',
        element:<Orders></Orders>,
        loader: cartLoader
      },
      {
        path:'/checkout',
        element:<PrivateRoute><Checkout></Checkout></PrivateRoute>
      },
      {
        path:'inventory',
        element:<Inventory></Inventory> 
      },
      {
        path:'login',
        element:<Login></Login>
      },
      {
        path:'signup',
        element:<Signup></Signup>
      }
    ]
  },
]);






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <Authprovider>
    <RouterProvider router={router} />
    </Authprovider>
        

  </React.StrictMode>,
)
