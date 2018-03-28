const defaultState = {
  users: [],
  logs: [],
  currentLog: {},
  activities: [],
  selectedLog: {},
  log_activities: [],
  moods: [],
  user: {}
};
export function rootReducer(state = defaultState, action) {
  switch (action.type) {
    case "FETCHING_USERS":
      console.log("fetching users");
      return { ...state, users: action.payload };
    case "FETCHING_ACTIVITIES":
      console.log("fetching activities");
      return { ...state, activities: action.payload };
    case "FETCHING_MOODS":
      console.log("fetching moods");
      return { ...state, moods: action.payload };
    case "FETCHING_LOGS":
      console.log("fetching logs", action.payload);
      return { ...state, logs: action.payload };
    case "CREATE_LOG":
      return {
        ...state,
        currentLog: action.payload,
        logs: [...state.logs, action.payload]
      };
    case "SELECT_LOG":
      console.log("select log");
      return { ...state, selectedLog: action.payload };
    case "FETCH_LOG_ACTIVITIES":
      console.log("log acitivites");
      return { ...state, log_activities: action.payload };
    case "SET_CURRENT_USER":
      console.log("login", action.payload);
      return { ...state, user: action.payload.user };
    case "LOGOUT":
      return defaultState;
    default:
      return state;
  }
}
