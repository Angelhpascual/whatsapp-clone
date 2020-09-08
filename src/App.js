import React from "react";
import "./App.css";
import Sidebar from "./componnets/Sidebar";

function App() {
  //BEM naming convention
  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        {/* Chat */}
      </div>
    </div>
  );
}

export default App;
