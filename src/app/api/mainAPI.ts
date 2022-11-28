import axios, { AxiosInstance } from "axios";
import config from "../../config";

const baseURL = config.API_URL;

export const mainAPI: AxiosInstance = axios.create({
	baseURL,
	headers: {
		"content-type": "application/json",
	},
});
