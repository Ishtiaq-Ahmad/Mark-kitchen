import React from "react";
import Home from "./view/Home";
import Dashboard from './view/Dashboard';
import Menu from './view/Menu';
import Customers from './view/Customers';
import Order from './view/Order';
import Info from './view/Info';
import MenuList from './component/MenuList';
import Categories from './component/Categories'
import { Routes, Route} from "react-router-dom";
import TestPurpose from './component/TestPurpose'

function App() {
  return (
    <div >
    {/* <TestPurpose/> */}
    <Home/>
      <Routes>
        <Route path= "/"  element={<Dashboard/>} />
        <Route path= "/menu"  element={<Menu/>} />
        <Route path="/menu/categories" element={<Menu/>}/>
        <Route path="/menu/list" element={<MenuList/>}/>
        <Route path= "/customers"  element={<Customers/>} />
        <Route path= "/order"  element={<Order/>} />
        <Route path= "/info"  element={<Info/>} />
      </Routes>
    </div>
  );
}

export default App;
