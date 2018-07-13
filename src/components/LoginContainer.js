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
    if (localStorage.getItem("jwt")) {
      return <div />;
    }
    return (
      <div>
        <div className="welcome-container">
          <h3 className="welcome-header">Welcome to CouCou!</h3>

          <form onSubmit={this.handleSubmit}>
            <label className="username">Username: </label>
            <input
              onChange={this.handleChange}
              name="username"
              type="text"
              value={this.state.username}
            />
            <p />
            <label className="password">Password: </label>
            <input
              onChange={this.handleChange}
              type="password"
              name="password"
              value={this.state.password}
            />
            <p />
            <input className="button-submit" type="submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default connect(null, { login })(Login);
