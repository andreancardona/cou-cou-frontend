const defaultState = {
  users: [],
  logs: [],
  currentLog: {},
  activities: [],
  selectedLog: {},
  log_activities: [],
  moods: []
};
export function rootReducer(state = defaultState, action) {
  switch (action.type) {
    case "FETCHING_USERS":
      console.log("fetching users");
      return { ...state, users: [...state.users, action.payload] };
    case "FETCHING_ACTIVITIES":
      console.log("fetching activities");
      return { ...state, activities: [...state.activities, action.payload] };
    case "FETCHING_MOODS":
      console.log("fetching moods");
      return { ...state, moods: action.payload };
    case "FETCHING_LOGS":
      console.log("fetching logs");
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
    default:
      return state;
  }
}
