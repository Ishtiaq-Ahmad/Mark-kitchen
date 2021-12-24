import React from "react";
import Home from "./view/Home";
import Dashboard from './view/Dashboard';
import Menu from './view/Menu';
import Customers from './view/Customers';
import Order from './view/Order';
import Info from './view/Info'
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div >
    <Home/>
      <Routes>
        {/* <Route exact path = "/" element ={<Home/>}/> */}
        <Route path= "/"  element={<Dashboard/>} />
        <Route path= "/menu"  element={<Menu/>} />
        <Route path= "/customers"  element={<Customers/>} />
        <Route path= "/order"  element={<Order/>} />
        <Route path= "/info"  element={<Info/>} />
      </Routes>
    </div>
  );
}

export default App;
