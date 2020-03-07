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

function App() {
  return (
    <div className="App">
      <h1>siema</h1>
      <Router>
        <Link to="/signup">
          <li>~ SIGN UP ~ </li>
        </Link>
        <Link to="/login">
          <li>~ LOGIN ~</li>
        </Link>
        <Link to="/uploadImage">
          <li>~ UPLOAD IMAGE ~</li>
        </Link>
        <Link to="/createStudio">
          <li>~ ADD YOUR STUDIO ~</li>
        </Link>
        <Link to="/studio">
          <li>~ LOOK AT ALL STUDIOS ~</li>
        </Link>
        <Link to="/mystudio">
          <li>~ MY STUDIO ~</li>
        </Link>
        <Route exact path="/studio" component={StudioListContainer} />
        <Route exact path="/studio/:id" component={StudioDetails} />
        <Route exact path="/signup" component={SignupContainer} />
        <Route exact path="/login" component={LoginContainer} />
        <Route exact path="/uploadImage" component={UploadImages} />
        <Route exact path="/createStudio" component={CreateStudioContainer} />
        <Route exact path="/mystudio" component={MyStudioContainer} />
      </Router>
    </div>
  );
}

export default App;
