import React from "react";
import "../App.css";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Videos from "../components/Videos";
const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="app__page">
        <Sidebar />
        <Videos />
      </div>
    </div>
  );
};

export default HomePage;
