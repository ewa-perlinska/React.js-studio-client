import React, { Component } from "react";
import { connect } from "react-redux";
import { loadMyStudio } from "../../actions/studios";

class MyStudioContainer extends Component {
  componentDidMount() {
    this.props.loadMyStudio(this.props.match.params.id);
  }
  render() {
    return (
      <div>
        <h1>MY STUDIO CONTAINER</h1>
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//   studios: state.studios.allStudios,
//   studio: state.studios.selectedStudio,
//   currentStudio: state.studios.currentStudio
// });

export default connect(null, { loadMyStudio })(MyStudioContainer);
