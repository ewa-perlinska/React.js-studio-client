import React from "react";

const closeButton = props => (
  <button className="close-button" onClick={props.click}>
    <div className="close-button_line" />
    <div className="close-button_line" />
  </button>
);

export default closeButton;
