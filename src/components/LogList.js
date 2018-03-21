import React from "react";
import { connect } from "react-redux";

class LogList extends React.Component {
  newEntryClick = event => {
    this.props.history.push("/logs/new");
  };
  logClick = event => {
    this.props.history.push("/logs/new");
  };
  render() {
    return (
      <div>
        <div>
          {" "}
          <h2> Your Diary Entries: </h2>
        </div>
        <div>
          <img
            height="100"
            width="100"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0x8PZGznwOgJzTYQWLdgi3UFmcxuKrMIehWjcfcTIhFeBxIMiAA"
            alt="image1"
          />
        </div>
        {this.props.allLogs.map(log => {
          return <li onClick={this.logClick}>{log.entry}</li>;
        })}
        <div> </div>
        <button onClick={this.newEntryClick}>make a new entry</button>
      </div>
    );
  }
}
export default connect(null)(LogList);
