import React from "react";
import HomeView from "./views/Home/HomeView";
import { Route, Routes } from "react-router-dom";
import * as u from "../urls";
import PageNotFound from "./views/PageNotFound404/PageNotFound";

const PageRouter: React.FC = () => {
	return (
		<div className={"page"}>
			<Routes>
				<Route path={u.HOME} element={<HomeView />}></Route>
				<Route path={'*'} element={<PageNotFound />}></Route>
			</Routes>
		</div>
	);
};

export default PageRouter;
