import React from "react";
import { Link, useParams } from "react-router-dom";
// import "./images/whiskey.jpg";
// import "./images/duke.jpg";
// import "./images/perry.jpg";
// import "./images/tubby.jpg";

function Details() {
  const { name } = useParams();

  //   console.log(name);

  return (
    <div>
      <h1>Details Page</h1>
      <div>
        <h2>Doggo</h2>
        <h2>{name}</h2>
      </div>
      <Link to="/">Home</Link>
    </div>
  );
}

export default Details;
