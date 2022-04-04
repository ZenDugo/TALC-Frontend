import React from "react";
import { Outlet, Link } from "react-router-dom";

function Properties() {
	return (
		<body>
			<div className="home">
				<div className="container">
					<h1 className="text-center mt-5">Properties Page</h1>
					<Outlet />
					<div>
						<Link className="btn btn-primary btn-lg" to="/properties/create">
							Create
						</Link>
					</div>
				</div>
			</div>
		</body>
	);
}

export default Properties;
