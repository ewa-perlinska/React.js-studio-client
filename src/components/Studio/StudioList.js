import React, { Component } from "react";
import { Link } from "react-router-dom";

class Studio extends Component {
  state = {
    mouseOn: false
  };
  render() {
    return (
      <div
        style={{ width: "25%", padding: 5 }}
        className='studio'
        onMouseEnter={() => this.setState({ mouseOn: true })}
        onMouseLeave={() => this.setState({ mouseOn: false })}
      >
        {/* <Link to={`/studio/${this.props.id}`}> */}
        {/* <div className="index">{this.props.id}</div>
          <div className="title">{this.props.studioName}</div> */}
        {this.state.mouseOn ? (
          <div style={{ width: "100%" }}>
            <div className='city'>{this.props.city}</div>
            <div className='country'>{this.props.country}</div>
          </div>
        ) : (
          <div style={{ width: "100%" }}>
            <img
              style={{ width: "100%" }}
              className='image'
              alt='Studio image'
              src={this.props.featuredImage}
            ></img>
          </div>
        )}
        {/* </Link> */}
        {/* <div className="city">{this.props.city}</div>
          <div className="country">{this.props.country}</div>
          <button onClick={() => this.props.onClick(this.props.id)}>
            ~ CHECK STUDIO ~
          </button>{" "} */}
      </div>
    );
  }
}

export default Studio;
