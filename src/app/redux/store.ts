import { configureStore, ThunkAction, Action, combineReducers } from "@reduxjs/toolkit";
import counterReducer from "../../features/counter/counterSlice";
import appReducer from "../redux/app/appSlice";
import { loadState, saveState } from "../../utils/localStorageUtils";

const persistedState = loadState();
const rootReducer = combineReducers({
	counter: counterReducer,
	app: appReducer,
});

export const store = configureStore({
	reducer: rootReducer,
	preloadedState: persistedState,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

store.subscribe(() => {
	saveState(store.getState());
});
