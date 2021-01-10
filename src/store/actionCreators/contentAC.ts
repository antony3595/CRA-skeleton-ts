import { FETCH_USERS_ERROR, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "../actionTypes/contentAT";
import { createAction } from "../../utils/storeUtils";
import { User } from "../../types/api/user";

export const fetchUsersRequest = () => createAction<typeof FETCH_USERS_REQUEST, undefined>(FETCH_USERS_REQUEST, undefined);
export const fetchUsersSuccess = (users: User[]) => createAction<typeof FETCH_USERS_SUCCESS, User[]>(FETCH_USERS_SUCCESS, users);
export const fetchUsersError = (error: string) => createAction<typeof FETCH_USERS_ERROR, string>(FETCH_USERS_ERROR, error);
