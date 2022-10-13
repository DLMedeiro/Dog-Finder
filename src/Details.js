import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
// import "./images/whiskey.jpg";
// import "./images/duke.jpg";
// import "./images/perry.jpg";
// import "./images/tubby.jpg";

function Details({ dogs }) {
  const navigate = useNavigate();
  const { id, name } = useParams();
  const [goHome, setGoHome] = useState(false);
  const [render, setRender] = useState(false);
  // Created an id to match the index of the default props to connect information on the dog selected

  const selectedDog = dogs[id];

  useEffect(() => {
    if (!dogs[id] || dogs[id].name !== name) {
      setGoHome(true);
      setRender(false);
    } else {
      setRender(true);
      setGoHome(false);
    }
  }, []);

  useEffect(() => {
    if (goHome) {
      return navigate("/dogs");
    }
  }, [goHome]);

  return (
    <div>
      {!render ? (
        <h1>No dogo here that matches that</h1>
      ) : (
        <div>
          <h1>{name}'s Details Page</h1>
          <img src={selectedDog.src} alt={selectedDog.name}></img>
          <div>
            <h2>Age: {selectedDog.age}</h2>
            {selectedDog.facts.map((f) => (
              <li>{f}</li>
            ))}
          </div>
          <Link to="/dogs">Home</Link>
        </div>
      )}
    </div>
  );
}

export default Details;
