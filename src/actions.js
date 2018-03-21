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

export function postLog(mood_id, user_id, entry) {
  return function(dispatch) {
    fetch(`http://localhost:3000/logs`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        mood_id: mood_id,
        user_id: user_id,
        entry: entry
      })
    })
      .then(res => res.json())
      .then(log => {
        //console.log(log);
        dispatch({ type: "CREATE_LOG", payload: log });
      });
  };
}

export function updateLog(currentLog, user_id, entry) {
  return function(dispatch) {
    fetch(`http://localhost:3000/logs/${currentLog.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: user_id,
        entry: entry
      })
    })
      .then(res => res.json())
      .then(log => {
        //console.log(log);
        dispatch({ type: "", payload: log });
      });
  };
}

export function updateActivities(currentLog, activities) {
  console.log("patching activity to backend");
  return function(dispatch) {
    fetch(`http://localhost:3000/logs/${currentLog.id}/add_activities`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        activities: activities
      })
    })
      .then(res => res.json())
      .then(log => {
        //console.log(log);
        dispatch({ type: "", payload: log });
      });
  };
}
