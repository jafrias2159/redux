import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

let id = 0;

const slice = createSlice({
  initialState: [],
  name: "bugs",
  reducers: {
    bugAdded: (bugs, action) => {
      bugs.push({
        id: ++id,
        description: action.payload.description,
        resolved: false,
      });

      return bugs;
    },

    bugRemoved: (bugs, action) => {
      return bugs.filter((bug) => bug.id != action.payload.id);
    },

    bugResolved: (bugs, action) => {
      return bugs.map((bug) => {
        if (bug.id === action.payload.id) {
          return { ...bug, resolved: true };
        }
        return bug;
      });
    },
  },
});

export default slice.reducer;

export const { bugAdded, bugRemoved, bugResolved } = slice.actions;

export const unresolvedBugsSelector = createSelector(
  state => state.entities.bugs,
  state => state.entities.projects,
  (bugs, project) => bugs.filter((bug) => !bug.resolved),
);