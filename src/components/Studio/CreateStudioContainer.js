import React, { Component } from "react";
import StudioForm from "./StudioForm";
import { connect } from "react-redux";
import { createStudio } from "../../actions";

class CreateStudioContainer extends Component {
  state = {
    studioName: "",
    street: "",
    city: "",
    country: "",
    email: "",
    number: "",
    descriptionOfStudio: "",
    descriptionOfCaseStudies: "",
    descriptionOfPractie: "",
    descriptionOfDesignEducation: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    const studioDetails = this.state;

    this.props.dispatch(createStudio(studioDetails));
    this.setState({
      studioName: "",
      street: "",
      city: "",
      country: "",
      email: "",
      number: "",
      descriptionOfStudio: "",
      descriptionOfCaseStudies: "",
      descriptionOfPractie: "",
      descriptionOfDesignEducation: ""
    });
  };

  render() {
    return (
      <div>
        <h1> ADD YOUR STUDIO </h1>
        <h3>~ ENTER INFORMATION ABOUT STUDIO BELOW ~</h3>
        <StudioForm
          values={this.state}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   console.log("STATE IN MSTP", state);
//   return {
//     event: state.events.selectedEvent
//   };
// };

export default connect()(CreateStudioContainer);

// export default connect(mapStateToProps)(CreateStudioContainer);
