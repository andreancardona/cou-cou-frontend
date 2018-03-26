export function addUser(user) {
  return {
    type: "ADD_USER",
    payload: user
  };
}
export function fetchUsers() {
  return function(dispatch) {
    fetch(`http://localhost:3000/users`)
      .then(res => res.json())
      .then(users => {
        dispatch({ type: "FETCHING_USERS", payload: users });
      });
  };
}

export function fetchActivities() {
  return function(dispatch) {
    fetch(`http://localhost:3000/activities`)
      .then(res => res.json())
      .then(activities => {
        dispatch({ type: "FETCHING_ACTIVITIES", payload: activities });
      });
  };
}

export function fetchMoods() {
  return function(dispatch) {
    fetch(`http://localhost:3000/moods`)
      .then(res => res.json())
      .then(moods => {
        dispatch({ type: "FETCHING_MOODS", payload: moods });
      });
  };
}

export function fetchLogs() {
  return function(dispatch) {
    fetch(`http://localhost:3000/logs`)
      .then(res => res.json())
      .then(logs => {
        dispatch({ type: "FETCHING_LOGS", payload: logs });
      });
  };
}

export function postLog(user_id, date, entry, mood_id, activities) {
  return function(dispatch) {
    fetch(`http://localhost:3000/logs`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: user_id,
        date: date,
        entry: entry,
        mood_id: mood_id,
        activities: activities
      })
    })
      .then(res => res.json())
      .then(log => {
        dispatch({ type: "CREATE_LOG", payload: log });
      });
  };
}

export function selectLog(log) {
  return {
    type: "SELECT_LOG",
    payload: log
  };
}
