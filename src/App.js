import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SignupContainer from "./components/SingUp/SingUpFormContainer";
import LoginContainer from "./components/Login/LoginFormContainer";
import UploadImages from "./components/ImageUpload/ImageUploadContainer";
import CreateStudioContainer from "./components/Studio/CreateStudioContainer";

function Test() {
  return <h1>Hello!</h1>;
}

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
        <Route exact path="/" component={Test} />
        <Route exact path="/signup" component={SignupContainer} />
        <Route exact path="/login" component={LoginContainer} />
        <Route exact path="/uploadImage" component={UploadImages} />
        <Route exact path="/createStudio" component={CreateStudioContainer} />
      </Router>
    </div>
  );
}

export default App;
