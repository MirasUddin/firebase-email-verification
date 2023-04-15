import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './assets/components/Layout/Main';
import Home from './assets/components/Home/Home';
import Login from './assets/components/Login/Login';
import Register from './assets/components/Register/Register';
import RegisterRBS from './assets/components/RegisterRBS/RegisterRBS';
import RegisterBS from './assets/components/RegisterBS/RegisterBS';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children:[
      {
        path: '/',
        element: <Home/>,
      },
      {
        path: '/login',
        element: <Login/>,
      },
      {
        path: '/register',
        element: <Register/>,
      },
      {
        path: '/registerRBS',
        element: <RegisterRBS/>
      },
      {
        path: '/registerBS',
        element: <RegisterBS/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
