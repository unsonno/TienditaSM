import React from 'react'
import { BrowserRouter as Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Contact } from "../pages/Contact";
import { Products } from "../pages/Products";
import { Carrito } from "../pages/Carrito";
import { Navbar } from 'react-bootstrap';

const Rutas = () => {
  return (
    <div>
      <Navbar/>
        <Routes>
            <Route path="/Home" element= {<Home/>}/>
            <Route path="/Contact" element= {<Contact/>}/>
            <Route path="/Products" element= {<Products/>}/>
            <Route path="/Carrito" element= {<Carrito/>}/>
        </Routes>
        
    </div>

  )
}

export default Rutas