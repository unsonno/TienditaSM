import React from 'react'
import { Rutas } from "./Rutas";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
   

    <div className='navBar'>
      <Rutas/>

      <div className='Home'>
        <Link to="/Home">Home</Link>
      </div>

      <div className='Contact'>
        <Link to= "/Contact">Contact us</Link>
      </div>

      <div className='Products'>
        <Link to="/Products">Products</Link> 
      </div>
      
      <div className='Carrito'>
        <Link to="/Carrito">Cart</Link>
      </div>

    </div>
  )
}

export default Navbar