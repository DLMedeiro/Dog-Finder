import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import DogList from "./DogList";
import Details from "./Details";

function Routes({ dogs }) {
  return (
    <Switch>
      <Route exact path="/dogs">
        <DogList dogs={dogs} />
      </Route>
      <Route exact path="/dogs/:name">
        <Details dogs={dogs} />
      </Route>
      <Redirect to="/dogs" />
    </Switch>
  );
}

export default Routes;
