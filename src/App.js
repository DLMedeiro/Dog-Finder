import "./App.css";
import React from "react";

import { Routes, Route } from "react-router-dom";
import DogList from "./DogList";
import Details from "./Details";
import Nav from "./Nav";

function App({ dogs }) {
  return (
    <div>
      <nav>
        <Nav dogs={dogs} />
      </nav>
      <div>
        <Routes>
          <Route path="/" element={<DogList dogs={dogs} />}></Route>
          <Route
            path="/dogs/:id/:name"
            element={<Details dogs={dogs} />}
          ></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
