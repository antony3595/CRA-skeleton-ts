import { ContentAction, ContentState } from "../../types/store/contentTypes";
import { Reducer } from "redux";
import { FETCH_USERS_SUCCESS } from "../actionTypes/contentAT";

export const initialState: ContentState = {
	users: [],
};

const contentReducer: Reducer<ContentState, ContentAction> = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_USERS_SUCCESS:
			return {
				...state,
				users: action.payload,
			};
		default:
			return state;
	}
};

export default contentReducer;
