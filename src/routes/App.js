import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import logincontainer from "../container/Login/logincontainer";
import signupcontainer from "../container/Signup/signupcontainer";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={logincontainer} />
          <Route path="/signup" component={signupcontainer} />
        </div>
      </Router>
    );
  }
}

export default App;
