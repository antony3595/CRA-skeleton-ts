export const loadState = () => {
	try {
		const serializedStore = localStorage.getItem("skeletonState");
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
		const serializedStore = JSON.stringify({
			...store,
			loading: undefined,
			errors: undefined,
		});

		localStorage.setItem("skeletonState", serializedStore);
	} catch (err: any) {
		new Error(err);
	}
};
