import { projectAdded, projectResolved } from "./store/projects";
import {
  bugAdded,
  bugResolved,
  unresolvedBugsSelector,
} from "./store/bugs";
import { addTeamMember, assignBug, bugsFromMemberSelector } from "./store/teamMembers";
import configureStore from "./store/configureStore";
const store = configureStore();

store.dispatch(projectAdded({ description: "New frash project" }));
store.dispatch(projectAdded({ description: "New frash project2" }));
store.dispatch(projectAdded({ description: "New frash project3" }));
store.dispatch(projectResolved({ id: 1 }));

store.dispatch(bugAdded({ description: "New bug 1" }));
store.dispatch(bugAdded({ description: "New bug 2" }));
store.dispatch(bugAdded({ description: "New bug 4" }));
store.dispatch(bugResolved({ id: 1 }));

store.dispatch(addTeamMember({name: 'Jorge Frias'}));
store.dispatch(assignBug({id: 1, bugId: 2}));
store.dispatch(assignBug({id: 1, bugId: 3}));

console.log(unresolvedBugsSelector(store.getState()));
console.log(bugsFromMemberSelector(store.getState(), 10));