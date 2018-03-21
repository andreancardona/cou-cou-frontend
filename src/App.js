import React, { Component } from "react";
import "./App.css";
import CouCouContainer from "./components/CouCouContainer";
import LogList from "./components/LogList";
import { connect } from "react-redux";
import { fetchUsers, fetchActivities } from "./actions";
import { withRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  state = {
    users: [],
    activities: [],
    logEntries: [],
    currentLog: {}
  };

  fetchLogEntries = () => {
    fetch(`http://localhost:3000/logs`)
      .then(res => res.json())
      .then(entries => {
        //console.log(entries);
        this.setState({
          logEntries: entries
        });
      });
  };

  componentDidMount() {
    this.fetchLogEntries();
    this.props.fetchUsers();
    this.props.fetchActivities();
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/logs/new"
            render={props => (
              <CouCouContainer
                {...props}
                logEntries={this.state.logEntries}
                activities={this.props.activities}
                users={this.state.users}
                currentLog={this.props.currentLog}
              />
            )}
          />
          <Route
            exact
            path="/logs"
            render={props => (
              <LogList {...props} allLogs={this.state.logEntries} />
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
    logEntries: state.logEntries,
    currentLog: state.currentLog
  };
};

export default withRouter(
  connect(mapStateToProps, {
    fetchUsers,
    fetchActivities
  })(App)
);
