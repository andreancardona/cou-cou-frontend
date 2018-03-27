import React from "react";
import { connect } from "react-redux";

class LogProfile extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <p>
          <h4>Date:</h4> {this.props.selectedLog.date}
        </p>
        <h4>Entry:</h4> {this.props.selectedLog.entry}
        <h4>Mood of the day:</h4>
        <ul className="log-list">
          {" "}
          <li>
            {" "}
            <img
              height="50"
              width="50"
              src={this.props.feeling.url}
              alt={this.props.selectedLog.id}
            />
          </li>
          {this.props.feeling.mood}
        </ul>
        <p />
        <h4>Activities:</h4>
        {this.props.selectedLog.activities.map(activity => {
          return (
            <ul className="log-list">
              {" "}
              <li>
                {" "}
                <img
                  height="50"
                  width="50"
                  src={activity.url}
                  alt={activity.id}
                />
              </li>
              {activity.activity}
            </ul>
          );
        })}
      </div>
    );
  }
}
export default connect(null)(LogProfile);
