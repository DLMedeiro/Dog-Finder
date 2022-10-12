import "./App.css";
import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";
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
          <Route path="/dogs" element={<DogList dogs={dogs} />}></Route>
          <Route
            path="/dogs/:id/:name"
            element={<Details dogs={dogs} />}
          ></Route>
          <Route path="*" element={<Navigate replace to="/dogs" />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
