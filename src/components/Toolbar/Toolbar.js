import React from "react";
import { Link } from "react-router-dom";
import "../SideDrawer/DrawerToggleButton";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar_navigation">
      <div className="toolbar_logo"></div>
      <img
        alt="omen image"
        src="https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/89731620_2629681873935328_4633637780960837632_o.jpg?_nc_cat=105&_nc_sid=8024bb&_nc_oc=AQmGkWubwxGHC13ToQVMXBuh8CXeSP1KRRqqYaN1d9wxeLOtF1zT7w1H_VGAgRRpVcM&_nc_ht=scontent-amt2-1.xx&oh=aa1d24868ac5165ea532a0d7cd4786ae&oe=5E93030B"
      ></img>
      <div className="spacer"></div>
      <div>
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
    </nav>
  </header>
);

export default toolbar;
