import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

let id = 0;

const teamMembersSlice = createSlice({
  initialState: [],
  name: "teamMembers",
  reducers: {
    addTeamMember: (members, action) => {
      return members.concat({ id: ++id, name: action.payload.name, bugs: [] });
    },
    assignBug: (members, action) => {
      const { id: memberID, bugId } = action.payload;
      const memberIndex = members.findIndex((member) => member.id === memberID);
      members[memberIndex].bugs.push({ bugId: bugId });

      return members;
    },
  },
});

export default teamMembersSlice.reducer;
export const { addTeamMember, assignBug } = teamMembersSlice.actions;

export const bugsFromMemberSelector = createSelector(
  (state, memberId) => [state.entities.teamMembers, memberId],
  ([members, memberId]) => {
    const memberIndex = members.findIndex((member) => member.id === memberId);
    return memberIndex !== -1 && members[memberIndex].bugs|| 'not found';
  }
);
