import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SignupContainer from "./components/SingUp/SingUpFormContainer";
import LoginContainer from "./components/Login/LoginFormContainer";
import UploadImages from "./components/ImageUpload/ImageUploadContainer";
import CreateStudioContainer from "./components/Studio/CreateStudioContainer";
import StudioListContainer from "./components/Studio/StudioListContainer";
import StudioDetails from "./components/Studio/StudioDetails";
import MyStudioContainer from "./components/Studio/MyStudioContainer";
import UpdateStudioContainer from "./components/Studio/UpdateStudioContainer";
import CreateProjectContainer from "./components/Project/CreateProjectContainer";
import CreateWorkshopContainer from "./components/Workshop/CreateWorkshopContainer";
import WorkshopListContainer from "./components/Workshop/WorkshopListContainer";
import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";
import NavBar from "./components/NavBar";
import CreateExhibitionContainer from "./components/Exhibiton/CreateExhibitonContainer";

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let sideDrawer;
    let backdrop;

    if (this.state.sideDrawerOpen) {
      sideDrawer = <SideDrawer />;
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div className="App" style={{ margin: "50px" }}>
        <Router>
          {/* <div style={{ height: "100%" }}> */}
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler}></Toolbar>
          <NavBar />
          {/* sideDrawer */}
          {/* {backdrop} */}
          <Route exact path="/studio" component={StudioListContainer} />
          <Route exact path="/studio/:id" component={StudioDetails} />
          <Route exact path="/signup" component={SignupContainer} />
          <Route exact path="/login" component={LoginContainer} />
          <Route exact path="/uploadImage" component={UploadImages} />
          <Route exact path="/createStudio" component={CreateStudioContainer} />
          <Route exact path="/workshop" component={WorkshopListContainer} />
          <Route
            exact
            path="/create-workshop"
            component={CreateWorkshopContainer}
          />
          <Route exact path="/mystudio" component={MyStudioContainer} />
          <Route
            exact
            path="/add-project/:id"
            component={CreateProjectContainer}
          />
          <Route
            exact
            path="/update-studio-information/:id"
            component={UpdateStudioContainer}
          />
          <Route
            exact
            path="/create-exhibition"
            component={CreateExhibitionContainer}
          />
          {/* </div> */}
        </Router>
      </div>
    );
  }
}

export default App;
