import React from "react";
import { connect } from "react-redux";
import { postLog } from "../actions";
import { updateLog, updateActivities } from "../actions";
class CouCouContainer extends React.Component {
  state = {
    text: "",
    activities: []
  };

  cryingClick = event => {
    console.log("crying");
    event.preventDefault();
    this.props.postLog(1, 1, this.state.text);
  };
  sadClick = event => {
    console.log("sad");
    event.preventDefault();
    this.props.postLog(2, 1, this.state.text);
  };
  neutralClick = event => {
    console.log("neutral");
    event.preventDefault();
    this.props.postLog(3, 1, this.state.text);
  };
  happyClick = event => {
    console.log("happy");
    event.preventDefault();
    this.props.postLog(4, 1, this.state.text);
  };
  ecstaticClick = event => {
    console.log("ecstatic");
    event.preventDefault();
    this.props.postLog(5, 1, this.state.text);
  };

  handleChange = event => {
    event.preventDefault();
    this.setState({
      text: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.updateLog(this.props.currentLog, 1, this.state.text);
  };

  handleActivitiesSubmit = event => {
    event.preventDefault();
    this.props.updateActivities(this.props.currentLog, this.state.activities);
    this.props.history.push("/logs");
  };

  activitiesClick = event => {
    console.log("getting active", event.target.id);
    event.preventDefault();
    this.setState(
      {
        activities: [...this.state.activities, parseInt(event.target.id)]
      },
      () => console.log(this.state.activities)
    );
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <h2>Welcome to CouCou! </h2>
        {this.activitiesOptions}
        <button>
          <img
            height="50"
            width="50"
            src="https://i.imgur.com/Vqs5Q4e.png"
            onClick={this.cryingClick}
            alt="image1"
          />
        </button>
        <button>
          <img
            height="50"
            width="50"
            src="https://i.imgur.com/bj7XgHv.png"
            onClick={this.sadClick}
            alt="image2"
          />
        </button>
        <button>
          <img
            height="50"
            width="50"
            src="https://i.imgur.com/m6fjOsX.png"
            onClick={this.neutralClick}
            alt="image3"
          />
        </button>
        <button>
          <img
            height="50"
            width="50"
            src="https://i.imgur.com/r4oUa6r.png"
            onClick={this.happyClick}
            alt="image4"
          />
        </button>
        <button>
          <img
            height="50"
            width="50"
            src="https://i.imgur.com/iGyDAXU.png"
            onClick={this.ecstaticClick}
            alt="image5"
          />
        </button>
        <div width="100" height="100">
          {" "}
        </div>
        <form onSubmit={this.handleSubmit}>
          <textarea type="text" onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>
        {this.props.activities.map(activity => {
          return activity.map(singleActivity => {
            return (
              <button>
                <img
                  height="50"
                  width="50"
                  src={singleActivity.url}
                  alt={singleActivity.id}
                  id={singleActivity.id}
                  onClick={this.activitiesClick}
                />
              </button>
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

export default connect(null, { postLog, updateLog, updateActivities })(
  CouCouContainer
);
