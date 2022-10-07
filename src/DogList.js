import React from "react";
import "./DogList.css";
import { Link } from "react-router-dom";
// import "./images/whiskey.jpg";
// import "./images/duke.jpg";
// import "./images/perry.jpg";
// import "./images/tubby.jpg";

function DogList({ dogs }) {
  // function DogList({ dogs }) {
  // let dogInfo = dogs.dogs.dogs;
  // const headShot = () => {};

  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/About">About</Link>
      <div>
        <h2>Doggies</h2>
        <div></div>
        {dogs.map((d) => (
          <div className="doggies">
            <h3
              style={{
                backgroundImage: `url(${d.src})`,
                height: "200px",
                width: "200px",
              }}
            >
              <Link to={`/${d.name}`}>{d.name}</Link>
            </h3>
            <h3>{d.src}</h3>
            <img src={d.src} alt={d.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default DogList;
