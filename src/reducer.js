const defaultState = {
  users: [],
  logEntries: [],
  currentLog: {},
  activities: []
};
export function rootReducer(state = defaultState, action) {
  switch (action.type) {
    case "FETCHING_USERS":
      console.log("fetching users");
      return { ...state, users: [...state.users, action.payload] };
    case "FETCHING_ACTIVITIES":
      console.log("fetching activities");
      return { ...state, activities: [...state.activities, action.payload] };
    case "CREATE_LOG":
      console.log("creating log");
      return { ...state, currentLog: action.payload };
    default:
      return state;
  }
}
