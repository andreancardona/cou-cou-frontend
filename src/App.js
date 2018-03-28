import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import {
  fetchUsers,
  fetchActivities,
  fetchMoods,
  fetchLogs,
  currentUser
} from "./actions";
import { withRouter, Route, Switch } from "react-router-dom";
import { button } from "react-bootstrap";
import LoginContainer from "./components/LoginContainer";
import CouCouContainer from "./components/CouCouContainer";
import LogList from "./components/LogList";
import LogProfile from "./components/LogProfile";
import BarGraph from "./components/BarGraph";
import PieChart from "./components/PieChart";

class App extends Component {
  logClick = log => {
    this.props.history.push("/logs");
    this.setState({
      selectedLog: log
    });
  };

  componentDidMount() {
    if (!this.props.user.id && !localStorage.getItem("jwt")) {
      console.log("no user and no jot");
      this.props.history.push("/login");
    } else if (!this.props.user.id && localStorage.getItem("jwt")) {
      console.log("no user but WE GOT jot");
      this.props.currentUser();
    } else if (this.props.user.id && localStorage.getItem("jwt")) {
      console.log("WE GOT user and WE GOT jot");
      this.props.fetchLogs();
      this.props.fetchUsers();
      this.props.fetchActivities();
      this.props.fetchMoods();
      this.props.history.push("/logs/new");
    } else {
      console.log("hit our else");
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log("next props", nextProps);
    if (
      !localStorage.getItem("jwt") &&
      this.props.location.pathname !== "/login"
    ) {
      this.props.history.push("/login");
    }
  }

  renderProfile() {
    if (this.props.selectedLog) {
      let feeling = this.props.moods.find(mood => {
        return mood.id === this.props.selectedLog.mood_id;
      });
      if (feeling) {
        return (
          <LogProfile feeling={feeling} selectedLog={this.props.selectedLog} />
        );
      } else {
        return null;
      }
    } else {
      return null;
    }
  }

  render() {
    return (
      <div className="App-container">
        <Switch>
          <Route
            exact
            path="/login"
            render={props => (
              <div>
                <LoginContainer {...props} />
              </div>
            )}
          />
          <Route
            exact
            path="/logs/new"
            render={props => (
              <div>
                <CouCouContainer
                  {...props}
                  activities={this.props.activities}
                  users={this.props.users}
                />
              </div>
            )}
          />
          <Route
            exact
            path="/logs"
            render={props => (
              <div>
                <LogList
                  {...props}
                  logs={this.props.logs}
                  logClick={this.logClick}
                />
                <p />
                {this.renderProfile()}
                <BarGraph moods={this.props.moods} logs={this.props.logs} />
                <PieChart moods={this.props.moods} logs={this.props.logs} />
              </div>
            )}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    activities: state.activities,
    users: state.users,
    moods: state.moods,
    logs: state.logs,
    currentLog: state.currentLog,
    selectedLog: state.selectedLog,
    log_activities: state.log_activities,
    user: state.user
  };
};

export default withRouter(
  connect(mapStateToProps, {
    fetchUsers,
    fetchActivities,
    fetchMoods,
    fetchLogs,
    currentUser
  })(App)
);
