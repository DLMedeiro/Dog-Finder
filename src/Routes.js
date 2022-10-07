import React from "react";
import { Route, Navigate } from "react-router-dom";
import DogList from "./DogList";
import Details from "./Details";
import About from "./About";

function Routes({ dogs }) {
  return (
    <Routes>
      <Route exact path="/dogs">
        <DogList dogs={dogs} />
      </Route>
      <Route exact path="/dogs/:name">
        <Details dogs={dogs} />
      </Route>
      {/* <Navigate to="/dogs" replace /> */}
      {/* <Redirect to="/dogs" /> */}
    </Routes>
  );
}

export default Routes;
