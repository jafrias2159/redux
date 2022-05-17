
import { bugAdded, bugResolved } from "./store/actions";
import store from "./store";

// store.dispatch(bugAdded('New frash bug'));
// store.dispatch(bugAdded('New frash bug2'));
// store.dispatch(bugAdded('New frash bug3'));
// store.dispatch(bugResolved(1));

console.log(store.getState());
