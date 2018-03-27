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
          make a new entry
        </button>
      </div>
    );
  }
}
export default connect(null, { selectLog })(LogList);
