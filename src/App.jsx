
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import Products from './Components/Products/Products'
import CartContent from './Components/Cart/CartContent'
import { BrowserRouter, Routes, Route, RouterProvider, Link } from 'react-router-dom';
import ContextProvider from './Context/Context'
import ProductDetail from './Components/Products/ProductDetail'
import ProductCard from './Components/Products/ProductCard'
import CheckoutForm from './Components/CheckOut/CheckoutForm'





function App() {

  return (
    <>
    <BrowserRouter>
    <ContextProvider>      
       <Routes>
             <Route exact path='/' element={<Home/>}/>
             <Route exact path='productos/category/:categoryId' element={<Products/>}/>
             <Route exact path='/cart' element={<CartContent/>}/>
             <Route exact path='/productos/id/:Id' element={<ProductDetail/>}/>
             <Route exact path='/checkout' element={<CheckoutForm/>}/>
             <Route path="*" element={<h2>404 Not Found</h2>} />

        </Routes>
     </ContextProvider>
     </BrowserRouter>
    </>
  )
}

export default App





