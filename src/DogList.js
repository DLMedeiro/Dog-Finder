import React from "react";
import "./DogList.css";
import { NavLink } from "react-router-dom";
// import "./images/whiskey.jpg";
// import "./images/duke.jpg";
// import "./images/perry.jpg";
// import "./images/tubby.jpg";

function DogList() {
  // function DogList({ dogs }) {
  // let dogInfo = dogs.dogs.dogs;
  // const headShot = () => {};

  return (
    <div>
      <h1>Home Page</h1>
      {/* <div>
        <h2>Doggies</h2>
        <div>
          <NavLink to="/About">About</NavLink>
        </div>
        {dogs.map((d) => (
          <div className="doggies">
            <h3
              style={{
                backgroundImage: `url(${d.src})`,
                height: "200px",
                width: "200px",
              }}
            >
              <NavLink to={`/dogs/${d.name}`}>{d.name}</NavLink>
            </h3>
            <h3>{d.src}</h3>
            <img src={d.src} alt={d.name} />
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default DogList;
