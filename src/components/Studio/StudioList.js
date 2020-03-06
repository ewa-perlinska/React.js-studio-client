import React, { Component } from "react";
import { Link } from "react-router-dom";

class StudioList extends Component {
  render() {
    return (
      <div>
        <div>
          <h2>{this.props.studioName}</h2>
        </div>
        <img
          className="StudioImage"
          alt="Studio image"
          src={this.props.featuredImage}
        ></img>
        <p>{this.props.city}</p>
        <p>{this.props.country}</p>
        <Link to={`/studio/${this.props.id}`}>
          <button onClick={() => this.props.onClick(this.props.id)}>
            ~ CHECK STUDIO ~
          </button>{" "}
        </Link>
      </div>
    );
  }
}

export default StudioList;
