import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Layout from './view/components/Layout/layout.jsx'
import AuthLayout from './view/components/AuthLayout/authLayout.jsx'
import PrivateRoute from "./routes/PrivateRoute";

import LoginPage from './view/loginPage/loginPage'
import Home from './view/Home/home.jsx'
import CadastroForm from './view/cadastro/cadastro.jsx'
import Perfil from './view/perfilUsuario/components/perfil.jsx'
import Pedidos from './view/perfilUsuario/components/pedidos.jsx'
import Manutencao from './view/manutencao/manutencao.jsx'



const router = createBrowserRouter ([
  {
    element: <AuthLayout />, 
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/cadastro",
        element: <CadastroForm />,
      },
    ],
  },
  {
    element: <Layout />, 
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/perfil",
        element: (
          <PrivateRoute>
            <Perfil />
            <Pedidos />
          </PrivateRoute>
        ),
      },
    ],
  },
 {
    path: "/manutencao",
    element: <Manutencao />,
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