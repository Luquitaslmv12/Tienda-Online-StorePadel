import React, { useState } from 'react'
import "./Banner.css" 
import { Link, NavLink } from 'react-router-dom'
import Products from '../Products/Products'


// const Productss = ({prod}) => {
//  return(
//   <div>
//   <li><Link to={`products/category/${prod.category}`}>asd</Link></li>
//   <Link to="products/category/jewelery">aaaaaaaaaaaaaaaaaaaaaaa</Link>
//   </div>
//  )

// }










const FilterSearch =() => {
const [inputValue, setInputValue]= useState ("")
  const filterUser=(value) =>{
    setInputValue(value)
  }



  return(
    <div className="buscador_container">
      <h2>🔍 Buscar producto
      <input type="search" onChange={(e)=>filterUser(e.target.value)}/>
      </h2>
      {inputValue}
      
      <ul></ul>
    </div>
  )
}



const Banner = () => {
  return (
    <div className='banner'>
      <div className='banner-container'>
        <h1>Shop de DEPORTE</h1>
        <p>The best shop</p>
        <FilterSearch/>
      </div>
    </div>
  )
}

export default Banner
