export const loadState = () => {
	try {
		const serializedStore = localStorage.getItem("state");
		if (serializedStore === null) {
			return undefined;
		}
		return JSON.parse(serializedStore);
	} catch (err) {
		return undefined;
	}
};

export const saveState = (store: any) => {
	try {
		const serializedStore = JSON.stringify(store);
		localStorage.setItem("state", serializedStore);
	} catch (err) {
		new Error(err);
	}
};
