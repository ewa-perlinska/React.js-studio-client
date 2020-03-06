import React from "react";
import { loadStudios, selectStudio } from "../../actions/studios";
import { connect } from "react-redux";
import StudioList from "./StudioList";

class StudioListContainer extends React.Component {
  componentDidMount() {
    console.log("WHAT IS MY EVENTS?", this.props.events);

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
    return (
      <div>
        {!this.props.studios ? (
          <div>Loading...</div>
        ) : (
          <div className="Searcher">
            {this.props.studios.map(studio => (
              <StudioList
                id={studio.id}
                key={studio.id}
                studioName={studio.studioName}
                city={studio.city}
                country={studio.counrty}
                featuredImage={studio.featuredImage}
                onClick={this.onClick}
              />
            ))}
          </div>
        )}
      </div>
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
