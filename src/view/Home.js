import React from "react";
import "../style/home.scss";
import Sidebar from "../component/Sidebar";
import TestPurpose from '../component/TestPurpose'

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      {/* <TestPurpose/> */}
    </div>
  );
};

export default Home;
