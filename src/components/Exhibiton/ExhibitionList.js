import React, { Component } from "react";
import { Link } from "react-router-dom";

class ExhibitionList extends Component {
  render() {
    return (
      <div className="list">
        <div>{this.props.title}</div>
        <div>{this.props.from}</div>
        <div>{this.props.dateOfOpening}</div>
        <div>{this.props.dateOfOclosing}</div>
        <div>{this.props.street}</div>
        <div className="city">{this.props.city}</div>
        <div className="country">{this.props.country}</div>
        <div>{this.props.price}</div>
        <div>{this.props.descriptionOfExhibitio}</div>
        <img
          className="image"
          alt="Studio image"
          src={this.props.featuredImage}
        ></img>
      </div>
    );
  }
}

export default ExhibitionList;
