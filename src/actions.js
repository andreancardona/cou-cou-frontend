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

export function fetchLogs(id) {
  return function(dispatch) {
    console.log("fetchLogs id", id);
    fetch(`http://localhost:3000/users/${id}/logs`)
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

export function login(username, password, history) {
  return function(dispatch) {
    fetch(`http://localhost:3000/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password })
    })
      .then(res => res.json())
      .then(json => {
        localStorage.setItem("jwt", json.token);
        history.push("/logs/new");
        dispatch({ type: "SET_CURRENT_USER", payload: json });
      });
  };
}

export function currentUser() {
  console.log("curent user");
  return function(dispatch) {
    return fetch(`http://localhost:3000/fetch_current_user`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ token: localStorage.getItem("jwt") })
    })
      .then(res => res.json())
      .then(json => {
        if (json.error) {
          console.log(json.error);
        } else {
          dispatch({ type: "SET_CURRENT_USER", payload: json });
        }
        return json;
      });
  };
}

export function logout() {
  console.log("logout");
  return {
    type: "LOGOUT"
  };
}
