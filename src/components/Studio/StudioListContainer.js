import React from "react";
import { loadStudios, selectStudio } from "../../actions/studios";
import { connect } from "react-redux";
import Studio from "./StudioList";
import _ from "lodash";

class StudioListContainer extends React.Component {
  componentDidMount() {
    this.props.loadStudios();
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
    if (!this.props.studios.length) {
      return "loading...";
    }
    console.log("fist array", this.props.studios);

    const arrayFour = _.chunk(
      this.props.studios,
      this.props.studios.length / 4
    );
    console.log("second array", arrayFour);

    return (
      <section className="container" style={{ marginTop: "64px" }}>
        <div className="column">
          {arrayFour[0].map(studio => (
            <Studio
              id={studio.id}
              key={studio.id}
              studioName={studio.studioName}
              city={studio.city}
              country={studio.country}
              featuredImage={studio.featuredImage}
              onClick={this.onClick}
            />
          ))}
        </div>
        <div className="column">
          {arrayFour[1].map(studio => (
            <Studio
              id={studio.id}
              key={studio.id}
              studioName={studio.studioName}
              city={studio.city}
              country={studio.country}
              featuredImage={studio.featuredImage}
              onClick={this.onClick}
            />
          ))}
        </div>
        <div className="column">
          {arrayFour[2].map(studio => (
            <Studio
              id={studio.id}
              key={studio.id}
              studioName={studio.studioName}
              city={studio.city}
              country={studio.country}
              featuredImage={studio.featuredImage}
              onClick={this.onClick}
            />
          ))}
        </div>
        <div className="column">
          {arrayFour[3].map(studio => (
            <Studio
              id={studio.id}
              key={studio.id}
              studioName={studio.studioName}
              city={studio.city}
              country={studio.country}
              featuredImage={studio.featuredImage}
              onClick={this.onClick}
            />
          ))}
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  studios: state.studios.allStudios,
  studio: state.studios.selectedStudio
});

export default connect(mapStateToProps, { loadStudios, selectStudio })(
  StudioListContainer
);
