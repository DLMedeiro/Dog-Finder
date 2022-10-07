import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav({ dogs }) {
  let navLinks = dogs.map((d) => (
    <li>
      <Link to={`/dogs/${d.id}/${d.name}`}>{d.name}</Link>
    </li>
  ));

  return (
    <ul>
      {navLinks}
      <li>
        <Link to="/">Home</Link>
      </li>
    </ul>
  );
}

export default Nav;
