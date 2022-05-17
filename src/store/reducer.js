import * as actions from "./actionTypes";
let id = 0;

const reducer = (state = [], action) => {
  switch (action.type) {
    case actions.BUG_ADDED:
      return [
        ...state,
        {
          id: ++id,
          description: action.payload.description,
          resolved: false,
        },
      ];
    case actions.BUG_REMOVED:
      return state.filter((bug) => bug.id != action.payload.id);
    case actions.BUG_RESOLVED:
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
