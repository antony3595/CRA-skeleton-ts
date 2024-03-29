import React from "react";
import ReactDOM from "react-dom";
import "./stylesheets/reset.scss";
import "./stylesheets/index.scss";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import config, { BuildType } from "./config";
import enableMockAPI from "./mock/api";

if (config.BUILD_TYPE === BuildType.MOCK) enableMockAPI();

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
