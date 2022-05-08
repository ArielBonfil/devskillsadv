import React from "react";
import "./Home.css";
import DataInput from "../DataInput"
import Table from '../Table';
const Home = () => {
  return (
    <div className="home__container">
      <DataInput/>
      <Table/>
    </div>
  );
};
export default Home;
