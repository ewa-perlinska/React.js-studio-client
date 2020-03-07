import React, { Component } from "react";
import { connect } from "react-redux";
import { loadMyStudio } from "../../actions/studios";
import MyStudio from "../Studio/MyStudio";

class MyStudioContainer extends Component {
  componentDidMount() {
    this.props.loadMyStudio();
  }

  onClick = async studioId => {
    console.log("this button does something! and this is the id: ", this.props);

    try {
      this.props.selectStudio(studioId);
    } catch (error) {
      console.warn("error test:", error);
    }
  };
  render() {
    return (
      <div>
        {this.props.myStudios.map(studio => (
          <MyStudio
            id={studio.id}
            key={studio.id}
            studioName={studio.studioName}
            city={studio.city}
            country={studio.country}
            email={studio.email}
            number={studio.number}
            descriptionOfStudio={studio.descriptionOfStudio}
            descriptionOfCaseStudies={studio.descriptionOfCaseStudies}
            descriptionOfPractie={studio.descriptionOfPractie}
            descriptionOfDesignEducation={studio.descriptionOfDesignEducation}
            featuredImage={studio.featuredImage}
            onClick={this.onClick}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  studios: state.studios.allStudios,
  studio: state.studios.selectedStudio,
  currentStudio: state.studios.currentStudio,
  myStudios: state.studios.myStudios
});

export default connect(mapStateToProps, { loadMyStudio })(MyStudioContainer);
