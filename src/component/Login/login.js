import React from "react";
import { Link } from "react-router-dom";

class Login extends React.Component {
  render() {
    return (
        <div className="container">
          <h3 className="h3 mb-3 font-weight-normal">Login to Polling App</h3>
          <div className="form-group">
            <label htmlFor="email">Email address:</label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="form-group">
            <label htmlFor="pwd">Password:</label>
            <input type="password" className="form-control" id="pwd" />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
    );
  }
}

export default Login;
