import React from "react";
import { connect } from "react-redux";
import { postLog } from "../actions";
import {
  fetchUsers,
  fetchActivities,
  fetchMoods,
  fetchLogs,
  currentUser
} from "../actions";
import { Button } from "react-bootstrap";
import DatePicker from "react-date-picker";
import MoodContainer from "./MoodContainer";
import TextContainer from "./TextContainer";
import ActivitiesContainer from "./ActivitiesContainer";
import { withRouter, Route, Switch } from "react-router-dom";

class CouCouContainer extends React.Component {
  state = {
    date: new Date(),
    mood_id: "",
    text: "",
    entry_submit: "",
    activities: [],
    current_container: "date"
  };

  componentDidMount() {
    console.log("testing comp did mount");
    this.props.fetchLogs();
    this.props.fetchUsers();
    this.props.fetchActivities();
    this.props.fetchMoods();
  }

  onChange = date => {
    console.log("date clicked", date);
    this.setState({
      date,
      current_container: "mood"
    });
  };

  setMood = event => {
    console.log(event.target.id);
    this.setState({
      mood_id: event.target.id,
      current_container: "text"
    });
  };

  handleChange = event => {
    event.preventDefault();
    this.setState({
      text: event.target.value
    });
  };

  handleEntrySubmit = event => {
    event.preventDefault();
    this.setState(
      {
        entry_submit: this.state.text,
        current_container: "activities"
      },
      () => console.log(this.state.text)
    );
  };
  activitiesClick = event => {
    event.preventDefault();
    this.setState(
      {
        activities: [...this.state.activities, parseInt(event.target.id)]
      },
      () => console.log(this.state.activities)
    );
  };

  handleActivitiesSubmit = event => {
    event.preventDefault();
    console.log("YOU DID IT");
    this.props.postLog(
      1,
      this.state.date,
      this.state.entry_submit,
      this.state.mood_id,
      this.state.activities
    );
    this.props.history.push("/logs");
  };

  render() {
    console.log(this.props.user);
    return (
      <div>
        <div className="welcome-container">
          <h2 className="welcome-header">
            CouCou, {this.props.user.name || "Name"}{" "}
          </h2>
        </div>
        <div className="datePicker">
          <DatePicker onChange={this.onChange} value={this.state.date} />
        </div>
        <p />

        <MoodContainer
          setMood={this.setMood}
          current_container={this.state.current_container}
        />
        <TextContainer
          handleChange={this.handleChange}
          handleEntrySubmit={this.handleEntrySubmit}
          current_container={this.state.current_container}
        />

        <ActivitiesContainer
          activitiesClick={this.activitiesClick}
          handleActivitiesSubmit={this.handleActivitiesSubmit}
          current_container={this.state.current_container}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    user: state.user
  };
};

export default connect(mapStateToProps, {
  postLog,
  fetchUsers,
  fetchActivities,
  fetchMoods,
  fetchLogs
})(CouCouContainer);
