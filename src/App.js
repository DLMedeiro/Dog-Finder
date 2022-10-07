import "./App.css";
import React from "react";
import { defaultProps } from "./DefaultProps";
// import Nav from "./Nav";
import { useRoutes } from "react-router-dom";
import DogList from "./DogList";
import Details from "./Details";

function App() {
  let routes = useRoutes([
    {
      path: "/",
      element: <DogList dogs={defaultProps} />,
    },
    {
      path: "/:name",
      element: <Details />,
    },
  ]);
  return routes;
}

export default App;
