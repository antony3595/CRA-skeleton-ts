import config from "../config";
import axios, { AxiosInstance } from "axios";
import { USERS } from "./endpoints";
import { User } from "../types/api/user";

const baseURL = config.API_BASE_URL;

const mainAPI: AxiosInstance = axios.create({
	baseURL,
	headers: {
		"content-type": "application/json",
	},
});

export const getUsers = () => {
	return mainAPI.get<User[]>(USERS);
};
