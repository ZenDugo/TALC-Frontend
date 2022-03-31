import React from "react";
import { Outlet } from "react-router-dom";

function Properties() {
	return (
		<body>
			<div className="home">
				<div className="container">
					<h1 className="text-center mt-5">Properties Page</h1>
					<Outlet />
				</div>
			</div>
		</body>
	);
}

export default Properties;
