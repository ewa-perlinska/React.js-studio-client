import React from "react";
import { Link } from "react-router-dom";

const toolbar = props => (
  <header>
    <nav>
      <div></div>
      <div></div>
      <div>
        <ul>
          <li>
            {" "}
            <Link to="/signup">
              <li>~ SIGN UP ~ </li>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;
