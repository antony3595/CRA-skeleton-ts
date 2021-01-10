import { Reducer } from "redux";
import { ErrorKeys, ErrorState } from "../../types/store/loadingTypes";
import { Action } from "../../types/store";

const initialState: ErrorState = {
	FETCH_USERS: "",
};

export const errorReducer: Reducer<ErrorState, Action<string, string>> = (state = initialState, action) => {
	const { type, payload } = action;
	const matches = /(.*)_(REQUEST|ERROR)/.exec(type);

	if (!matches) return state;

	const [, requestName, requestState] = matches;
	return {
		...state,
		[requestName]: requestState === "ERROR" ? payload : "",
	};
};

export const createErrorMessageSelector = (actions: ErrorKeys[]) => (state: ErrorState) => {
	const errors = actions.map((action) => state[action]);
	if (errors && errors[0]) {
		return errors[0];
	}
	return "";
};

export default errorReducer;
