import React, { useEffect } from "react";
import { getUsers } from "../../../api/mainAPI";

const HomeView = () => {
	useEffect(() => {
		getUsers().then((r) => {
			console.log(r.data);
		});
	}, []);
	return (
		<div className="page__content">
			<div className="page__section">Home view</div>
		</div>
	);
};

export default HomeView;
