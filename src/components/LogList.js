import React from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import { selectLog, fetchLogs, logout } from "../actions";

class LogList extends React.Component {
  componentDidMount() {
    console.log("component did mount", this.props.user);
    if (this.props.user.id) {
      this.props.fetchLogs(this.props.user.id);
    }
  }
  // componentDidUpdate() {
  //   console.log("component did update", this.props.user);
  //   if (this.props.logs.length) {
  //     this.props.fetchLogs(this.props.user.id);
  //   }
  // }
  newEntryClick = event => {
    this.props.history.push("/logs/new");
  };

  logOutClick = event => {
    localStorage.clear();
    this.props.logout();
    this.props.history.push("/login");
  };
  render() {
    console.log("log list props", this.props);
    if (!this.props.user.id) {
      return <div>Loading</div>;
    }
    return (
      <div className="log-list-container">
        <div>
          {" "}
          <h2 className="log-list-header"> Your Diary Entries: </h2>
        </div>
        <div>
          <img
            className="profile-image"
            height="100"
            width="100"
            src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Round&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=PastelBlue&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
            alt="image1"
          />
        </div>
        <p />
        {this.props.logs.map(eachLog => {
          return (
            <div>
              <ul
                className="log-list"
                key={eachLog.id}
                onClick={event => this.props.selectLog(eachLog)}
              >
                <li>{eachLog.date}</li>
              </ul>
            </div>
          );
        })}
        <div />
        <button className="button-submit" onClick={this.newEntryClick}>
          Make a new entry
        </button>
        <div />
        <button className="button-submit" onClick={this.logOutClick}>
          Logout
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user, logs: state.logs };
};
export default connect(mapStateToProps, { selectLog, fetchLogs, logout })(
  LogList
);
