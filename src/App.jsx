
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import Products from './Components/Products/Products'
import CartContent from './Components/CartContent/CartContent'
import { BrowserRouter, Routes, Route } from 'react-router-dom';




function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
           <BrowserRouter>
     
     <Home/>
       <Navbar/>
    <Banner/> 
    

       <Routes>
             <Route exact path='/' element={<Home/>}/>
             <Route exact path='/category/:categoryId' element={<Products/>}/>
           <Route exact path='/cart' element={<CartContent/>}/>
             <Route exact path='*' element={<Home/>}/>

        </Routes>

     </BrowserRouter>
    </>
  )
}

export default App





