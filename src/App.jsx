import React from "react";
import "./estilos/App.css";
import '@radix-ui/themes/styles.css';
import { Theme } from "@radix-ui/themes";
import { Rutas } from "./components/Rutas";

const App = () => {
  return (     
       <div>
        <Theme appearance="dark"></Theme>
        <Rutas/>
       </div>
       
  );
};
export default App;

