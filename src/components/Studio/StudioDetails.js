import React, { Component } from "react";
import { connect } from "react-redux";
import { loadStudio } from "../../actions/studios";

class StudioDetails extends Component {
  componentDidMount() {
    this.props.loadStudio(this.props.match.params.id);
  }
  render() {
    return (
      <div>
        <h1>{this.props.currentStudio.studioName}</h1>
        <p>{this.props.currentStudio.street}</p>
        <p>{this.props.currentStudio.city}</p>
        <p>{this.props.currentStudio.country}</p>
        <p>{this.props.currentStudio.email}</p>
        <p>{this.props.currentStudio.number}</p>
        <p>{this.props.currentStudio.descriptionOfStudio}</p>
        <p>{this.props.currentStudio.descriptionOfCaseStudies}</p>
        <p>{this.props.currentStudio.descriptionOfPractie}</p>
        <p>{this.props.currentStudio.descriptionOfDesignEducation}</p>
        <img
          className="StudioImage"
          alt="Studio image"
          src={this.props.currentStudio.featuredImage}
        ></img>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  studios: state.studios.allStudios,
  studio: state.studios.selectedStudio,
  currentStudio: state.studios.currentStudio
});

export default connect(mapStateToProps, { loadStudio })(StudioDetails);
