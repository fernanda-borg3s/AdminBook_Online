import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import  './index.css'
import { NavTop } from './components/NavTop/NavTop.jsx'
import Home from './pages/Home/Home.jsx'
import LivroLidos from './pages/LivrosLidos/LivrosLidos.jsx'
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/Login/Login.jsx'



const router = createBrowserRouter([
  {
    path: '/',
    element: <Login/>,
    errorElement:<ErrorPage/>,
  },
  {
    path:"/home",
    element: <NavTop/>,
    errorElement:<ErrorPage/>,
    children: [
      {
        path: "/home",
        element:<Home/>
      },
      {
        path:"/home/livrosLidos",
        element:<LivroLidos/>
      },
    ]
  },

]
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer
     position="top-right"
     autoClose={2000}
     hideProgressBar={false}
     newestOnTop={false}
     closeOnClick
     rtl={false}
     pauseOnFocusLoss
     draggable
     pauseOnHover
     theme="colored"
   
     />
  </React.StrictMode>,
)
