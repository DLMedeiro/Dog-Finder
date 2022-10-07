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
      path: "/dogs/:id/:name",
      element: <Details dogs={defaultProps} />,
    },
    // Correct way to redirect?
    // {
    //   path: "*",
    //   element: <DogList dogs={defaultProps} />,
    // },
  ]);
  return routes;
}

export default App;
