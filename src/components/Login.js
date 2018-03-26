import React from "react";
import { connect } from "react-redux";
import { loginUser } from "../actions";
import { Button } from "react-bootstrap";

class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };

  render() {
    return (
      <div>
        <h3>User Login</h3>
        <form>
          <label>Username: </label>
          <input name="username" />
          <label>Password: </label>
          <input type="password" name="password" />
          <input type="submit" />
          <Button label="Submit" />
        </form>
      </div>
    );
  }
}

export default connect(null)(Login);
