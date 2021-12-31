import React from "react";
import "../style/menu.scss";
import Categories, { categoryList } from "../component/Categories";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Sidebar from '../component/Sidebar';

const Menu = () => {

  return (
    <div className="menu_div">
    <Sidebar/>
    <Categories/>
 
    </div> 
  );
};

export default Menu;
