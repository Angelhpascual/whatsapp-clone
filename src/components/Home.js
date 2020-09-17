import React from "react";
import "./Home.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

function Home() {
  return (
    <div className="home__index">
      <h1>
        Welcome to Whatsapp-Clone by
        <br />
        <span>angelhpascual</span>
      </h1>
      <h1>Choose a room from the list in the sidebar</h1>
      <ArrowBackIcon />
    </div>
  );
}

export default Home;
