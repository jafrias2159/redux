import { projectAdded, projectResolved } from "./store/projects";
import {bugAdded, bugRemoved, bugResolved} from "./store/bugs";
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

console.log(store.getState());
