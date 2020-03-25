import React from "react";
import { Link } from "react-router-dom";
import closeButton from "./Closebutton";

const sideDrawer = props => (
  <nav className="side-drawer">
    <div className="drawer-container">
      <div>JOIN US</div>
      <div>STUDIOS</div>
      <div>EXHIBITIONS</div>
      <div>BOOK STORES</div>
      <div>WORKSHOPS</div>
      <div>
        <Link to="/signup">~ SIGN UP ~</Link>
      </div>
      <div>
        <Link to="/studio">~ LOOK AT ALL STUDIOS ~</Link>{" "}
      </div>
      <div>look at EXHIBITIONS</div>
      <div>look at bookstores</div>

      <div>
        <Link to="/workshop">~ LOOK AT ALL WORKSHOPS ~</Link>{" "}
      </div>

      <div>
        {" "}
        <Link to="/login">~ LOGIN ~</Link>
      </div>

      <div>
        <Link to="/createStudio">~ ADD YOUR STUDIO ~</Link>{" "}
      </div>
      <div>add your exhibition</div>
      <div>add your bookstore</div>
      <div>
        <Link to="/create-workshop">~ ADD YOUR WORKSHOP ~</Link>{" "}
      </div>
      <div>
        <Link to="/createProject">~ ADD YOUR PROJECTS ~</Link>{" "}
      </div>
      <div>
        <Link to="/mystudio">~ MY STUDIO ~</Link>{" "}
      </div>
      <div>my exhibition</div>
      <div>my bookstore</div>
      <div>my workshop</div>
    </div>
  </nav>
);

export default sideDrawer;

{
  /* <div>
<Link to="/uploadImage">~ UPLOAD IMAGE ~</Link>
</div> */
}
