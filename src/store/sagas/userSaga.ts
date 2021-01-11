import { fetchUsersError, fetchUsersRequest, fetchUsersSuccess } from "../actionCreators/contentAC";
import { put, call, takeLatest, fork } from "redux-saga/effects";
import { FETCH_USERS_REQUEST } from "../actionTypes/contentAT";
import { getUsers } from "../../api/mainAPI";

function* fetchUsers(action: ReturnType<typeof fetchUsersRequest>) {
	try {
		const response = yield call(getUsers);
		yield put(fetchUsersSuccess(response.data));
	} catch (e) {
		yield put(fetchUsersError(e.message || ""));
	}
}

function* watchUsersFetching() {
	yield takeLatest(FETCH_USERS_REQUEST, fetchUsers);
}

export default function* usersSaga() {
	yield fork(watchUsersFetching);
}
