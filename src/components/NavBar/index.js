import React from "react";
import { Link } from "react-router-dom";

export default function NavBar(props) {
  return (
    <div>
      <Link to="/signup">~ SIGN UP ~</Link>
      <Link to="/studio">~ LOOK AT ALL STUDIOS ~</Link>{" "}
      <Link to="/workshop">~ LOOK AT ALL WORKSHOPS ~</Link>{" "}
      <Link to="/login">~ LOGIN ~</Link>
      <Link to="/createStudio">~ ADD YOUR STUDIO ~</Link>{" "}
      <Link to="/create-workshop">~ ADD YOUR WORKSHOP ~</Link>{" "}
      <Link to="/createProject">~ ADD YOUR PROJECTS ~</Link>{" "}
      <Link to="/mystudio">~ MY STUDIO ~</Link>{" "}
      <Link to="/create-exhibition">~ ADD YOUR EXHIBITION ~</Link>{" "}
      <Link to="/exhibition">~ LOOK AT ALL EXHIBITIONS ~</Link>{" "}
      <Link to="/create-bookstore">~ ADD YOUR BOOKSTORE ~</Link>{" "}
    </div>
  );
}
