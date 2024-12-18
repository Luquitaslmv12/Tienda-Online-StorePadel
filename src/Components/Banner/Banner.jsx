import React, { useState } from 'react'
import "./Banner.css" 




// const FilterSearch =() => {
// const [inputValue, setInputValue]= useState ("")
//   const filterUser=(value) =>{
//     setInputValue(value)
//   }



//   return(
//     <div className="buscador-container">
//       <h2>🔍 Buscar producto
//       <input type="search" onChange={(e)=>filterUser(e.target.value)}/>
//       </h2>
//       {inputValue}
      
//       <ul></ul>
//     </div>
//   )
// }



const Banner = () => {
  return (
    <div className='banner'>
      <div className='banner-container'>
        <h1>ACE PADEL STORE</h1>
        <p>La tienda con más ventas online</p>
        {/* <FilterSearch/> */}
      </div>
    </div>
  )
}

export default Banner
