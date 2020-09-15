import React from "react";
import "./App.css";
import Sidebar from "./componnets/Sidebar";
import Chat from "./componnets/Chat";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  //BEM naming convention
  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
