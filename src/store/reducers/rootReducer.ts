import { combineReducers } from "redux";
import contentReducer from "./contentReducer";
import loadingReducer from "./loadingReducer";
import errorReducer from "./errorReducer";

const rootReducer = combineReducers({
	content: contentReducer,
	loading: loadingReducer,
	errors: errorReducer,
});

export default rootReducer;
