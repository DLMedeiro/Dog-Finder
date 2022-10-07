import React from "react";
import "./DogList.css";
import { Link } from "react-router-dom";
import whiskey from "./images/whiskey.jpg";
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
      <div>
        <h2>Doggies</h2>
        {dogs.map((d) => (
          <div className="doggies">
            <div
              style={{
                height: "200px",
                width: "200px",
                backgroundSize: "cover",
                backgroundImage: `url(${d.src})`,
              }}
            ></div>
            <div>
              <Link to={`/dogs/${d.id}/${d.name}`}>{d.name}</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DogList;
