import { combineReducers } from "redux";
import projectsReducer from "./projects";
import bugsReducer from "./bugs";
import teamMembersReducer  from "./teamMembers";

export default combineReducers({
  bugs: bugsReducer,
  projects: projectsReducer,
  teamMembers: teamMembersReducer
});
