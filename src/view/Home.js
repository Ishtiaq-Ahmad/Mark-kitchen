import React from "react";
import "../style/home.scss";
import Sidebar from "../component/Sidebar";
import TestPurpose from '../component/TestPurpose'
import Login from '../component/Login';
import Dashboard from './Dashboard';

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <Dashboard/>
    </div>
  );
};

export default Home;
