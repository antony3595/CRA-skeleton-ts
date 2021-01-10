import { createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import config from "../config";
import { loadState, saveState } from "../utils/localStorageUtils";
import rootReducer from "./reducers/rootReducer";

const persistedState = loadState();
export type AppState = ReturnType<typeof rootReducer>;

const store: Store = config.isProduction()
	? createStore(rootReducer, persistedState)
	: createStore(rootReducer, persistedState, composeWithDevTools());

store.subscribe(() => {
	saveState(store.getState());
});

export default store;
