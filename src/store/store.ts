import { createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import config from "../config";
import { loadState, saveState } from "./localStorage";
import rootReducer from "./rootReducer";

const persistedState = loadState();

const store: Store = config.isProduction()
	? createStore(rootReducer, persistedState)
	: createStore(rootReducer, persistedState, composeWithDevTools());

store.subscribe(() => {
	saveState(store.getState());
});

export default store;
