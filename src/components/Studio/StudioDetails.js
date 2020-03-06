import React, { Component } from "react";
import { connect } from "react-redux";
import { loadStudio } from "../../actions/studios";

class StudioDetails extends Component {
  componentDidMount() {
    this.props.loadStudio(this.props.match.params.id);
  }
  render() {
    return <div>hello from studio details</div>;
  }
}

export default connect(null, { loadStudio })(StudioDetails);
