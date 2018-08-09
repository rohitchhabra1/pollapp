import React from "react";
import { Link } from "react-router-dom";

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      role: "user"
    };
    this.valid = false;
  }
  onChange = e => {
    if (!e.target.value) {
      this.valid = true;
    }
    this.setState({ [e.target.id]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    
    this.props.userSignupRequest(this.state);
  };
  render() {
    return (
      <div className="container">
        <form onSubmit={event => this.handleSubmit(event)}>
          <h3 className="h3 mb-3 font-weight-normal">Signup to Polling App</h3>
          <div className="form-group">
            {this.state.valid && <div>All Fields are required</div>}
            <label htmlFor="name">Name*:</label>
            <input
              type="text"
              className="form-control"
              id="name"
              required
              value={this.state.name}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address*:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              required
              value={this.state.email}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="pwd">Password*:</label>
            <input
              type="password"
              className="form-control"
              id="password"
              required
              value={this.state.password}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="options">Role:</label>
            <select
              className="form-control"
              id="options"
              value={this.state.role}
              onChange={this.onChange}
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        <div className="text-center">
          <Link to="/">Log In</Link>
        </div>
      </div>
    );
  }
}

export default Signup;
