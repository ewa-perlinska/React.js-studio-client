import React, { Component } from "react";
import { Link } from "react-router-dom";

class StudioList extends Component {
  render() {
    return (
      <div>
        <div>
          <h2>{this.props.title}</h2>
        </div>
        <img
          class="Studio image"
          alt="Studio image"
          src={this.props.imageUrl}
        ></img>
        <p>{this.props.date}</p>
        <p>{this.props.description}</p>
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
