import React from "react";
import { connect } from "react-redux";
import { postLog } from "../actions";
import { Button } from "react-bootstrap";

class TextContainer extends React.Component {
  state = {
    date: new Date(),
    mood_id: "",
    text: "",
    entry_submit: "",
    activities: []
  };

  handleChange = event => {
    event.preventDefault();
    this.setState({
      text: event.target.value
    });
  };
  handleEntrySubmit = event => {
    event.preventDefault();
    this.setState({
      entry_submit: this.state.text
    });
    this.props.history.push("/logs/activities/new");
  };
  render() {
    return (
      <div>
        <h2>What is on your mind?</h2>
        <div>
          <form onSubmit={this.handleEntrySubmit}>
            <textarea type="text" onChange={this.handleChange} />
            <input type="submit" value="Submit" />
          </form>
        </div>
        <p />
      </div>
    );
  }
}

export default connect(null, { postLog })(TextContainer);
