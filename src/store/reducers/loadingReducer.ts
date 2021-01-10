import { Reducer } from "redux";
import { Action } from "../../types/store";
import { LoadingKeys, LoadingState } from "../../types/store/loadingTypes";

const initialState: LoadingState = {
	FETCH_USERS: true,
};

const loadingReducer: Reducer<LoadingState, Action<string, undefined>> = (state: LoadingState = initialState, action) => {
	const { type } = action;
	const matches = /(.*)_(REQUEST|SUCCESS|ERROR)/.exec(type);

	if (!matches) return state;
	const [, requestName, requestState] = matches;
	return {
		...state,
		[requestName]: requestState === "REQUEST",
	};
};
export const createLoadingSelector = (actions: LoadingKeys[]) => (state: LoadingState) => actions.some((action) => state[action]);

export default loadingReducer;
