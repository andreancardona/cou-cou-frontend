import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { fetchUsers, fetchActivities, fetchMoods, fetchLogs } from "./actions";
import { withRouter, Route, Switch } from "react-router-dom";
import { button } from "react-bootstrap";
import CouCouContainer from "./components/CouCouContainer";
import LogList from "./components/LogList";
import LogProfile from "./components/LogProfile";
import BarGraph from "./components/BarGraph";
import PieChart from "./components/PieChart";
//import DateContainer from "./components/DateContainer";
//import ActivitiesContainer from "./components/ActivitiesContainer";

class App extends Component {
  state = {
    users: [],
    activities: [],
    moods: [],
    logs: [],
    currentLog: {},
    selectedLog: {}
  };

  logClick = log => {
    this.props.history.push("/logs");
    this.setState({
      selectedLog: log
    });
  };

  componentDidMount() {
    this.props.fetchLogs();
    this.props.fetchUsers();
    this.props.fetchActivities();
    this.props.fetchMoods();
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
            path="/logs/new"
            render={props => (
              <div>
                <CouCouContainer
                  {...props}
                  activities={this.props.activities}
                  users={this.state.users}
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
    log_activities: state.log_activities
  };
};

export default withRouter(
  connect(mapStateToProps, {
    fetchUsers,
    fetchActivities,
    fetchMoods,
    fetchLogs
  })(App)
);
