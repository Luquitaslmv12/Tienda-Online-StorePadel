import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import CartContent from './Components/CartContent/CartContent.jsx'
import ContextProvider from './Context/Context.jsx'
import CartElements from './Components/CartContent/CartElements.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'
import Products from './Components/Products/Products.jsx'
import Banner from './Components/Banner/Banner.jsx'





  //  const router = createBrowserRouter([

  //  {
  //    path: '/',
  //    element: <App/>

  //  },
  //  {
  //    path: '/cart',
  //    element: <CartContent/>

  //   },
  //   {
  //     path: '/products/category/:categoria' ,
  //     element: <Products />
  //   }


  // ])



  //  createRoot(document.getElementById('root')).render(
  //   <StrictMode>
  //    <ContextProvider>
  //    <RouterProvider router={router}/>
  //    </ContextProvider>
  //    </StrictMode>,
  //  )



  createRoot(document.getElementById('root')).render(
  <StrictMode>
       
    <App/>
       
       </StrictMode>,
     )






 

  
 
     

   

 



