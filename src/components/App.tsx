import React from "react";
import { BrowserRouter } from "react-router-dom";
import PageRouter from "./PageRouter";
import store from "../store/store";
import { Provider } from "react-redux";

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<div className="page">
					<PageRouter />
				</div>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
