import React from "react";
import "./DogList.css";
import { Link } from "react-router-dom";

function DogList({ dogs }) {
  return (
    <div>
      <h1>Home Page</h1>
      <div>
        <h2>Doggies</h2>
        {dogs.map((d) => (
          <div className="doggies">
            <Link
              style={{
                height: "200px",
                width: "200px",
                backgroundSize: "cover",
                backgroundImage: `url(${d.src})`,
              }}
              to={`/dogs/${d.id}/${d.name}`}
            >
              {d.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DogList;
