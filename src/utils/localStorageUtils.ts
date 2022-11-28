import config from "../config";
import { RootState } from "../app/redux/store";

export const loadState = () => {
	try {
		const serializedStore = localStorage.getItem(config.localStorageKey);
		if (serializedStore === null) {
			return undefined;
		}
		const state: RootState = JSON.parse(serializedStore);

		if (state.app?.stateVersion === undefined || config.stateVersion !== state.app.stateVersion) {
			return undefined;
		}
		return state;
	} catch (err) {
		return undefined;
	}
};

export const saveState = (state: RootState) => {
	const serializedStore = JSON.stringify({ ...state });
	localStorage.setItem(config.localStorageKey, serializedStore);
};
