import React, { Component } from "react";
import { connect } from "react-redux";
import { loadStudio } from "../../actions/studios";

class MyStudioContainer extends Component {
  // componentDidMount() {
  //   this.props.loadStudio(this.props.match.params.id);
  // }
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

export default MyStudioContainer;

// export default connect(mapStateToProps, { loadStudio })(MyStudioContainer);
