import { fetchUsersError, fetchUsersRequest, fetchUsersSuccess } from "../actionCreators/contentAC";
import { getUsers } from "../../api/mainAPI";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { ActionCreator, AnyAction } from "redux";
import { AppState } from "../store";

const fetchUsersThunk: ActionCreator<ThunkAction<void, AppState, {}, AnyAction>> = () => (
	dispatch: ThunkDispatch<AppState, {}, AnyAction>
): void => {
	fetchUsersRequest();
	getUsers()
		.then((r) => dispatch(fetchUsersSuccess(r.data)))
		.catch((e) => dispatch(fetchUsersError(e.message || "")));
};
export default fetchUsersThunk;
