import React, { Component } from "react";
import { Link } from "react-router-dom";

class StudioList extends Component {
  render() {
    return (
      <div className="list">
        <Link to={`/studio/${this.props.id}`}>
          <div className="index">{this.props.id}</div>
          <div className="title">{this.props.studioName}</div>
          <div>
            <img
              className="image"
              alt="Studio image"
              src={this.props.featuredImage}
            ></img>
          </div>
          <div className="city">{this.props.city}</div>
          <div className="country">{this.props.country}</div>
          <button onClick={() => this.props.onClick(this.props.id)}>
            ~ CHECK STUDIO ~
          </button>{" "}
        </Link>
      </div>
    );
  }
}

export default StudioList;
