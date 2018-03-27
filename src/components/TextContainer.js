import React from "react";
import { connect } from "react-redux";
import { postLog } from "../actions";
import { Button } from "react-bootstrap";

class TextContainer extends React.Component {
  render() {
    console.log("text props", this.props);
    if (this.props.current_container !== "text") {
      return <div />;
    }
    return (
      <div>
        <p />
        <h2 className="welcome-header">What ya thinking about?</h2>

        <form onSubmit={this.props.handleEntrySubmit}>
          <textarea
            className="text-form"
            type="text"
            onChange={this.props.handleChange}
          />
          <p />
          <input className="button-submit" type="submit" value="submit" />
        </form>
        <p />
      </div>
    );
  }
}

export default connect(null, { postLog })(TextContainer);
