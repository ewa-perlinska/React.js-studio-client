import React from "react";
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
function App() {
  return (
    <div className="App">
      <Router>
        <Toolbar></Toolbar>
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
      </Router>
    </div>
  );
}

export default App;
