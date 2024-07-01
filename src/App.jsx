import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./estilos/App.css";
import LogIn from "./components/LogIn";
import '@radix-ui/themes/styles.css';

// import Navbar from './components/Navbar';
import SignIn from "./components/SingIn";
import Navbar  from "./components/Navbar";
import { Theme } from "@radix-ui/themes";



const App = () => {
  return (     
        <Router>
            <Theme appearance="dark">
            <Navbar/>
            <Routes>
                <Route path="/" element={<SignIn/>}></Route>
            </Routes>
           </Theme>
        </Router>   
    
  );
};
export default App;