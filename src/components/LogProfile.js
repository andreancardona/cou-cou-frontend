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
        <h4>Mood of the day:</h4>
        <ul>
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
            <ul>
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
