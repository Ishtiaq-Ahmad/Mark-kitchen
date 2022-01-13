import React from "react";
import Home from "./view/Home";
import Dashboard from './view/Dashboard';
import Menu from './view/Menu';
import Customers from './view/Customers';
import Order from './view/Order';
import Info from './view/Info';
import MenuList from './component/MenuList';
import { Routes, Route} from "react-router-dom";
import Login from './component/Login';
import ProtectedRoute from './component/ProtectedRoute'

function App() {
  return (
    <div >
    {/* <Login/> */}
    {/* <Home/> */}
      <Routes>
      <Route  exact path="/" element={<Login/>}/>

      <Route element={<ProtectedRoute/>}>
      <Route path="/home" element={<Home/>}/>
        <Route path= "/menu"  element={<Menu/>} />
        <Route path="/menu/categories" element={<Menu/>}/>
        <Route path="/menu/list" element={<MenuList/>}/>
        <Route path= "/customers"  element={<Customers/>} />
        <Route path= "/order"  element={<Order/>} />
        <Route path= "/info"  element={<Info/>} />
      </Route>
      
       {/* <Route path="/home" element={<Home/>}/>  */}
      {/* <Route  exact path="/login" element={<Login/>}/> */}
      {/* <ProtectedRoute path="/home" element={<Home/>} isAuth={true} /> */}
      
        {/* <Route path= "/dashboard"  element={<Dashboard/>} /> */}
        
      </Routes>
    </div>
  );
}

export default App;
