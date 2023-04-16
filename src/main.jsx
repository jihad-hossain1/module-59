import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Loging from './components/Login/Loging';
import Register from './components/Register/Register';
import RegisterRbs from './components/RegisterRBS/RegisterRbs';
import RegisterBs from './components/RegisterBS/RegisterBs';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Loging></Loging>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/register-rbs',
        element: <RegisterRbs></RegisterRbs>
      },
      {
        path: '/register-bs',
        element: <RegisterBs></RegisterBs>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>,
)
