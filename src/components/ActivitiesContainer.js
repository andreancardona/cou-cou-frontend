import React from "react";
import { connect } from "react-redux";
import { postLog } from "../actions";
import { Button } from "react-bootstrap";
import DatePicker from "react-date-picker";

class ActivitiesContainer extends React.Component {
  render() {
    console.log(this.props);
    if (this.props.current_container !== "activities") {
      return <div />;
    }
    return (
      <div>
        <h2 className="welcome-header">What did you do today? </h2>
        {this.activitiesOptions}
        <p />
        {this.props.activities.map(activity => {
          return activity.map(singleActivity => {
            return (
              <Button className="clickable-images" bsStyle="sucess">
                <img
                  height="50"
                  width="50"
                  src={singleActivity.url}
                  alt={singleActivity.activity}
                  id={singleActivity.id}
                  onClick={this.props.activitiesClick}
                />
              </Button>
            );
          });
        })}
        <form onSubmit={this.props.handleActivitiesSubmit}>
          <p />
          <input className="button-submit" type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    activities: state.activities
  };
};
export default connect(mapStateToProps)(ActivitiesContainer);
