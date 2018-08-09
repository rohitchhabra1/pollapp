import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "../component/Login/login";
import Signup from "../component/Signup/signup";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Login} />
          <Route path="/signup" component={Signup} />
        </div>
      </Router>
    );
  }
}

export default App;
