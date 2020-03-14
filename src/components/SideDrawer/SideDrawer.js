import React from "react";
import { Link } from "react-router-dom";

const sideDrawer = props => (
  <nav className="side-drawer">
    <ul>
      <li>
        {" "}
        <a>
          {" "}
          <Link to="/signup">~ SIGN UP ~</Link>
        </a>
      </li>
      <li>
        <a>
          <Link to="/login">~ LOGIN ~</Link>
        </a>
      </li>
      <li>
        <a>
          <Link to="/uploadImage">~ UPLOAD IMAGE ~</Link>
        </a>
      </li>
      <li>
        <a>
          {" "}
          <Link to="/createStudio">~ ADD YOUR STUDIO ~</Link>{" "}
        </a>
      </li>
      <li>
        <a>
          <Link to="/studio">~ LOOK AT ALL STUDIOS ~</Link>{" "}
        </a>
      </li>
      <li>
        <a>
          {" "}
          <Link to="/workshop">~ LOOK AT ALL WORKSHOPS ~</Link>{" "}
        </a>
      </li>
      <li>
        <a>
          <Link to="/mystudio">~ MY STUDIO ~</Link>{" "}
        </a>
      </li>
      <li>
        <a>
          <Link to="/createProject">~ ADD YOUR PROJECTS ~</Link>{" "}
        </a>
      </li>
      <li>
        <a>
          <Link to="/create-workshop">~ ADD YOUR WORKSHOP ~</Link>{" "}
        </a>
      </li>
    </ul>
  </nav>
);

export default sideDrawer;
