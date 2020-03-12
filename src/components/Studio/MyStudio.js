import React, { Component } from "react";
import { Link } from "react-router-dom";
class MyStudio extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>{this.props.studioName}</h1>
          <p>{this.props.street}</p>
          <p>{this.props.city}</p>
          <p>{this.props.country}</p>
          <p>{this.props.email}</p>
          <p>{this.props.number}</p>
          <p>{this.props.descriptionOfStudio}</p>
          <p>{this.props.descriptionOfCaseStudies}</p>
          <p>{this.props.descriptionOfPractie}</p>
          <p>{this.props.descriptionOfDesignEducation}</p>
          <img alt="Studio image" src={this.props.featuredImage}></img>
          <div>
            <Link to={`/update-studio-information/${this.props.id}`}>
              <button onClick={() => this.props.onClick(this.props.id)}>
                ~ EDIT STUDIO INFORMATION ~
              </button>{" "}
            </Link>
          </div>
          <div>
            <Link to={`/add-project/${this.props.id}`}>
              <button onClick={() => this.props.onClick(this.props.id)}>
                ~ ADD PROJECT ~
              </button>{" "}
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default MyStudio;
