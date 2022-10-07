import "./App.css";
import React from "react";
import { defaultProps } from "./DefaultProps";
// import Nav from "./Nav";
import {
  Route,
  Routes,
  BrowserRouter,
  useRoutes,
  Outlet,
} from "react-router-dom";
import DogList from "./DogList";

function App() {
  let routes = useRoutes([
    {
      path: "/",
      element: <div>Hello Index</div>,
    },
    {
      path: "games",
      element: <Games />,
    },
    {
      path: "dogList",
      element: <DogList />,
    },
  ]);
  return routes;
}

export default App;

const Games = () => {
  return (
    <div className="Games">
      <div>This is the Games pages</div>
      <Outlet />
    </div>
  );
};
