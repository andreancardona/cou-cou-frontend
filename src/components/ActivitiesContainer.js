import React from "react";
import { connect } from "react-redux";
import { postLog } from "../actions";
import { Button } from "react-bootstrap";
import DatePicker from "react-date-picker";

class ActivitiesContainer extends React.Component {
  state = {
    date: new Date(),
    mood_id: "",
    text: "",
    entry_submit: "",
    activities: []
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
      this.props.date,
      this.state.entry_submit,
      this.state.mood_id,
      this.state.activities
    );
    this.props.history.push("/logs");
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <h2>Welcome to CouCou TESTING! </h2>
        {this.activitiesOptions}
        <Button bsStyle="sucess">
          <img
            height="50"
            width="50"
            src="https://i.imgur.com/9jD56an.png"
            onClick={this.cryingClick}
            alt="image1"
            id="1"
          />
        </Button>
        <Button bsStyle="sucess">
          <img
            height="50"
            width="50"
            src="https://i.imgur.com/2y5fxrA.png"
            onClick={this.sadClick}
            alt="image2"
            id="2"
          />
        </Button>
        <Button bsStyle="sucess">
          <img
            height="50"
            width="50"
            src="https://i.imgur.com/YRsBKMi.png"
            onClick={this.neutralClick}
            alt="image3"
            id="3"
          />
        </Button>
        <Button bsStyle="sucess">
          <img
            height="50"
            width="50"
            src="https://i.imgur.com/kEiCYh9.png"
            onClick={this.happyClick}
            alt="image4"
            id="4"
          />
        </Button>
        <Button bsStyle="sucess">
          <img
            height="50"
            width="50"
            src="https://i.imgur.com/gX2CRgx.png"
            onClick={this.ecstaticClick}
            alt="image5"
            id="5"
          />
        </Button>
        <p />
        <form onSubmit={this.handleEntrySubmit}>
          <textarea type="text" onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>
        <p />
        {this.props.activities.map(activity => {
          return activity.map(singleActivity => {
            return (
              <Button bsStyle="sucess">
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
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default connect(null, { postLog })(ActivitiesContainer);
