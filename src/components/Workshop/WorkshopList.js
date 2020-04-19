import React, { Component } from "react";
import { Link } from "react-router-dom";

class WorkshopList extends Component {
  render() {
    return (
      <div className="list">
        <div>{this.props.title}</div>
        <div>{this.props.by}</div>
        <div>{this.props.date}</div>
        <div>{this.props.street}</div>
        <div className="city">{this.props.city}</div>
        <div className="country">{this.props.country}</div>
        <div>{this.props.price}</div>
        <div>{this.props.descriptionOfWorkshop}</div>
        <img
          className="image"
          alt="Studio image"
          src={this.props.featuredImage}
        ></img>
      </div>
    );
  }
}

export default WorkshopList;
