import React from "react";
import { connect } from "react-redux";
import { login } from "../actions";
import { Button } from "react-bootstrap";

class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.login(
      this.state.username,
      this.state.password,
      this.props.history
    );
  };

  render() {
    return (
      <div>
        <h3>User Login</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Username: </label>
          <input
            onChange={this.handleChange}
            name="username"
            type="text"
            value={this.state.username}
          />
          <label>Password: </label>
          <input
            onChange={this.handleChange}
            type="password"
            name="password"
            value={this.state.password}
          />
          <input type="submit" />
          <Button label="Submit" />
        </form>
      </div>
    );
  }
}

export default connect(null, { login })(Login);
