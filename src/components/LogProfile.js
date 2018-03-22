import React from "react";
import { connect } from "react-redux";

class LogProfile extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h4>Log:</h4>
        <p>Date: {this.props.selectedLog.date}</p>
        <p>Entry: {this.props.selectedLog.entry}</p>
        <p>
          Mood of the day:
          <img
            height="50"
            width="50"
            src={this.props.feeling.url}
            alt={this.props.selectedLog.id}
          />
          {this.props.feeling.mood}
        </p>
        <p>Activities: {this.props.selectedLog.activities}</p>
      </div>
    );
  }
}
export default connect(null)(LogProfile);
