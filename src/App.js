import "./App.css";
import React from "react";
import Routes from "./Routes";
import { defaultProps } from "./DefaultProps";
// import Nav from "./Nav";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Nav /> */}
        <Routes dogs={defaultProps} />
      </BrowserRouter>
    </div>
  );
}

export default App;
