import { applyMiddleware, createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import config from "../config";
import { loadState, saveState } from "../utils/localStorageUtils";
import rootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";

const persistedState = loadState();
export type AppState = ReturnType<typeof rootReducer>;


const store: Store = config.isProduction()
	? createStore(rootReducer, persistedState, applyMiddleware(thunk))
	: createStore(rootReducer, persistedState, composeWithDevTools(applyMiddleware(thunk)));


store.subscribe(() => {
	saveState(store.getState());
});

export default store;
