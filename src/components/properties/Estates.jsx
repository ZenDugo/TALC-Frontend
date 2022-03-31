import React from "react";
import { Link } from "react-router-dom";

function Estates() {
	return (
		<div className="home">
			<div className="container">
				<Link to="/properties/this-is-a-test-property">
					<div className="row align-items-center my-5">
						<div className="col-lg-7">
							<img
								className="img-fluid rounded mb-4 mb-lg-0"
								src="http://placehold.it/900x400"
								alt=""
							/>
						</div>
						<div className="col-lg-5">
							<h1 className="font-weight-light">This is a property title</h1>
							<p>Test Description for the property</p>
						</div>
					</div>
				</Link>
			</div>
		</div>
	);
}

export default Estates;
