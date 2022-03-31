import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
	return (
		<div className="navigation">
			<nav className="navbar navbar-expand py-5 navbar-dark bg-dark">
				<div className="container">
					<NavLink className="navbar-brand" to="/">
						React Multi-Page Website
					</NavLink>
					<div>
						<ul className="navbar-nav ml-auto">
							<li className="nav-item">
								<NavLink className="nav-link" to="/">
									Dashboard
									<span className="sr-only">(current)</span>
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" to="/properties">
									Properties
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" to="/messages">
									Messages
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default Navigation;
