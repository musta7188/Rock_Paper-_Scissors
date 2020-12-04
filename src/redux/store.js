import { createStore, combineReducers } from "redux";
import reducer from "./reducer";

function storeInLocalStorage(state) {
  //stringify the state and save in the local storage
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (e) {
    console.log(e);
  }
}

function getStateFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.log(e);
    return undefined;
  }
}

const stateInLocalStorage = getStateFromLocalStorage();
const store = createStore(
  reducer,
  stateInLocalStorage,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => storeInLocalStorage(store.getState()));

export default store;
