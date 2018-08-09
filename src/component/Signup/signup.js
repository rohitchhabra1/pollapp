import React from "react";
import { Link } from "react-router-dom";

class Signup extends React.Component {
  render() {
    return (
      <div className="container">
        <h3 className="h3 mb-3 font-weight-normal">Signup to Polling App</h3>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" className="form-control" id="username" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address:</label>
          <input type="email" className="form-control" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Password:</label>
          <input type="password" className="form-control" id="pwd" />
        </div>
        <div class="form-group">
          <label htmlFor="options">Role:</label>
          <select class="form-control" id="options">
            <option>User</option>
            <option>Admin</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <div class="text-center">
          <Link to="/">Log In</Link>
        </div>
      </div>
    );
  }
}

export default Signup;
