import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home__index">
      <h1 className="home__header">
        Welcome to my <br /> React-Chat
        <br />
        <br /> by <br />
        <span className="home__creator">angelhpascual</span>
      </h1>
    </div>
  );
}

export default Home;
