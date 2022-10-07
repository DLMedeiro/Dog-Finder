import React from "react";
import { Link, useParams } from "react-router-dom";
// import "./images/whiskey.jpg";
// import "./images/duke.jpg";
// import "./images/perry.jpg";
// import "./images/tubby.jpg";

function Details({ dogs }) {
  const { id, name } = useParams();
  // Created an id to match the index of the default props to connect information on the dog selected

  const selectedDog = dogs[id];

  return (
    <div>
      <h1>{name}'s Details Page</h1>
      <img src={selectedDog.src} alt={selectedDog.name}></img>
      <div>
        <h2>Age: {selectedDog.age}</h2>
        {selectedDog.facts.map((f) => (
          <li>{f}</li>
        ))}
      </div>
      <Link to="/">Home</Link>
    </div>
  );
}

export default Details;
