import { applyMiddleware, createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import config from "../config";
import { loadState, saveState } from "../utils/localStorageUtils";
import rootReducer from "./reducers/rootReducer";
import rootSaga from "./sagas/rootSaga";
import createSagaMiddleware from "redux-saga";

const persistedState = loadState();
export type AppState = ReturnType<typeof rootReducer>;

const sagaMiddleware = createSagaMiddleware();

const store: Store = config.isProduction()
	? createStore(rootReducer, persistedState, applyMiddleware(sagaMiddleware))
	: createStore(rootReducer, persistedState, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

store.subscribe(() => {
	saveState(store.getState());
});

export default store;
