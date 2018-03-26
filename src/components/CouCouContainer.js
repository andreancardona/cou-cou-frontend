import React from "react";
import { connect } from "react-redux";
import { postLog } from "../actions";
import { Button } from "react-bootstrap";
import DatePicker from "react-date-picker";
import MoodContainer from "./MoodContainer";

class CouCouContainer extends React.Component {
  state = {
    date: new Date(),
    mood_id: "",
    text: "",
    entry_submit: "",
    activities: []
  };

  onChange = date => {
    console.log("date clicked", date);
    this.setState({
      date
    });
  };

  cryingClick = event => {
    console.log("crying");
    event.preventDefault();
    this.setState({
      mood_id: parseInt(event.target.id)
    });
  };

  sadClick = event => {
    console.log("sad");
    this.setState({
      mood_id: parseInt(event.target.id)
    });
  };
  neutralClick = event => {
    console.log("neutral");
    this.setState({
      mood_id: parseInt(event.target.id)
    });
  };
  happyClick = event => {
    console.log("happy");
    this.setState({
      mood_id: parseInt(event.target.id)
    });
  };
  ecstaticClick = event => {
    console.log("ecstatic");
    this.setState({
      mood_id: parseInt(event.target.id)
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
        entry_submit: this.state.text
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
    return (
      <div className="welcome-container">
        <h2 className="welcome-header">CouCou, Andrea! </h2>
        <div className="datePicker">
          <DatePicker onChange={this.onChange} value={this.state.date} />
        </div>
        <p />
        <h2 className="welcome-header">How are you feeling today? </h2>

        <div>
          <Button className="clickable-images" bsStyle="sucess">
            <img
              height="50"
              width="50"
              src="https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/118/loudly-crying-face_1f62d.png"
              onClick={this.cryingClick}
              alt="image1"
              id="1"
            />
          </Button>

          <Button className="clickable-images" bsStyle="sucess">
            <img
              height="50"
              width="50"
              src="https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/118/disappointed-face_1f61e.png"
              onClick={this.sadClick}
              alt="image2"
              id="2"
            />
          </Button>

          <Button className="clickable-images" bsStyle="sucess">
            <img
              height="50"
              width="50"
              src="https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/118/neutral-face_1f610.png"
              onClick={this.neutralClick}
              alt="image3"
              id="3"
            />
          </Button>

          <Button className="clickable-images" bsStyle="sucess">
            <img
              height="50"
              width="50"
              src="https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/118/grinning-face_1f600.png"
              onClick={this.happyClick}
              alt="image4"
              id="4"
            />
          </Button>

          <Button className="clickable-images" bsStyle="sucess">
            <img
              height="50"
              width="50"
              src="https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/118/upside-down-face_1f643.png"
              onClick={this.ecstaticClick}
              alt="image5"
              id="5"
            />
          </Button>
        </div>
        <p />
        <h2 className="welcome-header">What ya thinking about?</h2>

        <form onSubmit={this.handleEntrySubmit}>
          <textarea
            className="text-form"
            type="text"
            onChange={this.handleChange}
          />
          <p />
          <input className="button-submit" type="submit" value="submit" />
        </form>
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
                  onClick={this.activitiesClick}
                />
              </Button>
            );
          });
        })}
        <form onSubmit={this.handleActivitiesSubmit}>
          <p />
          <input className="button-submit" type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default connect(null, { postLog })(CouCouContainer);
