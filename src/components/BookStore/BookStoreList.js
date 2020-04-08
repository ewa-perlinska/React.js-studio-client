import React, { Component } from "react";
import { Link } from "react-router-dom";

class BookStoreList extends Component {
  render() {
    return (
      <div className="list">
        <div>{this.props.name}</div>
        <div>{this.props.hourOfOpening}</div>
        <div>{this.props.hourOfOclosing}</div>
        <div>{this.props.street}</div>
        <div className="city">{this.props.city}</div>
        <div className="country">{this.props.country}</div>
        <div>{this.props.phoneNumber}</div>
        <div>{this.props.email}</div>
        <div>{this.props.website}</div>
        <div>{this.props.descriptionOfBookstore}</div>
        <img
          className="image"
          alt="Bookstore image"
          src={this.props.featuredImage}
        ></img>
      </div>
    );
  }
}

export default BookStoreList;
