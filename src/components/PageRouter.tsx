import React from "react";
import { Route, Switch } from "react-router-dom";
import { HOME } from "../urls";
import HomeView from "./views/home/HomeView";
import PageNotFound from "./views/page_not_found/PageNotFound";

const PageRouter = (props: any) => {
	return (
		<Switch>
			<Route exact path={HOME} component={HomeView} />
			<Route component={PageNotFound} />
		</Switch>
	);
};

export default PageRouter;
