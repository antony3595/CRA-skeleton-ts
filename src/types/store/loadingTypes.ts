import { FETCH_USERS } from "../../store/actionTypes/contentAT";

export type LoadingKeys = typeof FETCH_USERS;
export type ErrorKeys = LoadingKeys;

export type LoadingState = {
	readonly [K in LoadingKeys]: boolean;
};

export type ErrorState = {
	readonly [K in ErrorKeys]: string;
};
