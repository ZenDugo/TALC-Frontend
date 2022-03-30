import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
	Navigation,
	Footer,
	Home,
	Properties,
	Estate,
	Estates,
} from "./components";

ReactDOM.render(
	<Router>
		<Navigation />
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/properties" element={<Properties />}>
				<Route path="" element={<Estates />} />
				<Route path=":postSlug" element={<Estate />} />
			</Route>
		</Routes>
		<Footer />
	</Router>,

	document.getElementById("root")
);

serviceWorker.unregister();
