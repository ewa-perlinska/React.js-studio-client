import React, { Component } from "react";
import UpdateStudioContainer from "./UpdateStudioContainer";

class UpdateStudioRender extends Component {
  componentDidMount() {
    console.log("WWWWWWWAAAAAT ARE MY PROPS", this.props);
  }
  render() {
    return (
      <div>
        <UpdateStudioContainer id={this.props.match.params.id} />
      </div>
    );
  }
}

export default UpdateStudioRender;
