import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
	return (
		<div className="navigation">
			<nav className="navbar navbar-dark bg-dark navbar-expand-lg py-4">
				<Link to="/" className="navbar-brand">
					TALC
				</Link>
				<div className="collapse navbar-collapse">
					<ul className="navbar-nav mr-auto">
						<li className="navbar-item">
							<Link to="/" className="nav-link">
								Dashboard
							</Link>
						</li>
						<li className="navbar-item">
							<Link to="/properties" className="nav-link">
								Properties
							</Link>
						</li>
						<li className="navbar-item">
							<Link to="/messages" className="nav-link">
								Messages
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
}

export default Navigation;
