import React from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import { selectLog } from "../actions";

class LogList extends React.Component {
  newEntryClick = event => {
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
        {this.props.allLogs.map(eachLog => {
          return (
            <div>
              <ul
                key={eachLog.id}
                onClick={event => this.props.selectLog(eachLog)}
              >
                <li>{eachLog.date}</li>
              </ul>
            </div>
          );
        })}
        <div />
        <Button bsStyle="primary" onClick={this.newEntryClick}>
          make a new entry
        </Button>
      </div>
    );
  }
}
export default connect(null, { selectLog })(LogList);
