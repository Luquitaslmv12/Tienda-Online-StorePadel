import React from 'react'
import Banner from '../Banner/Banner'
import Navbar from '../Navbar/Navbar'
import Products from '../Products/Products'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Home = () => {
  return (
    <>
    <Navbar/>
      <Banner/>
      <Products/>
        
      
    </>
  )
}

export default Home
