import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Layout from './view/components/Layout/layout.jsx'

import LoginPage from './view/loginPage/loginPage'
import TravelSearchCard from './view/Home/components/TravelSearchCard.jsx';
import CadastroForm from './view/cadastro/cadastro.jsx'
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
        path: "/",
        element: <TravelSearchCard />,
      },
      {
        path: "/cadastro",
        element: <CadastroForm />,
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