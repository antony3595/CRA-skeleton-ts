import MockAdapter from "axios-mock-adapter";
import { users } from "./users";
import { mainAPI } from "../../api/mainAPI";
import { USERS } from "../../api/endpoints";
import { User } from "../../types/api/user";

const enableMockAPI = () => {
	const mock = new MockAdapter(mainAPI);

	mock.onGet(USERS).reply<User[]>(200, users);
};

export default enableMockAPI;
