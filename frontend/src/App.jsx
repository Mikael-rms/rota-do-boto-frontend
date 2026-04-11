import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Layout from './view/components/Layout/layout.jsx'

import LoginPage from './view/loginPage/loginPage'
import Home from './view/Home/home.jsx'
import AuthLayout from './view/components/AuthLayout/authLayout.jsx'

const router = createBrowserRouter ([
  {
    element: <AuthLayout />, 
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
  {
    element: <Layout />, 
    children: [
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
]);

function App() {

return (
  <>
  <RouterProvider router = {router} />
  </>
)
}

export default App