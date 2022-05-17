// Action Types
const BUG_ADDED = "bugAdded";
const BUG_REMOVED = "bugRemoved";
const BUG_RESOLVED = "bugResolved";

// Action Creators
export const bugAdded = (description) => ({
  type: BUG_ADDED,
  payload: {
    description: description,
  },
});

export const bugResolved = (id) => ({
  type: BUG_RESOLVED,
  payload: {
    id,
  },
});

let id = 0;

// Reducer
const reducer = (state = [], action) => {
  switch (action.type) {
    case BUG_ADDED:
      return [
        ...state,
        {
          id: ++id,
          description: action.payload.description,
          resolved: false,
        },
      ];
    case BUG_REMOVED:
      return state.filter((bug) => bug.id != action.payload.id);
    case BUG_RESOLVED:
      return state.map((bug) => {
        if (bug.id === action.payload.id) {
          return { ...bug, resolved: true };
        }
        return bug;
      });
    default:
      return state;
  }
};

export default reducer;
