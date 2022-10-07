import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <h1>This is the about page.</h1>
      <p>We are disrupting everything!</p>
      <p>We have been featured on lots of blogs.</p>
      <p>Want to work with us? Get in line.</p>
      <Link to="/">Whiskey</Link>
    </div>
  );
}

export default About;
