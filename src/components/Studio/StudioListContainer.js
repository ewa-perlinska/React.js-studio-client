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
              <StudioList />
            ))}
          </div>
        )}
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//   events: state.events.allEvents,
//   event: state.events.selectedEvent
// });

export default connect(null, { loadStudios, selectStudio })(
  StudioListContainer
);

// export default connect(mapStateToProps, { loadStudios, selectStudio })(
//   StudioListContainer
// );
