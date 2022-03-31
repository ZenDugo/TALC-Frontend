import React from "react";
import { Link } from "react-router-dom";

function Chats() {
	return (
		<div className="home">
			<div className="container">
				<Link to="/messages/this-is-a-test-chat">
					<div className="row align-items-center my-5">
						<div className="col-lg-7">
							<img
								className="img-fluid rounded mb-4 mb-lg-0"
								src="http://placehold.it/900x400"
								alt=""
							/>
						</div>
						<div className="col-lg-5">
							<h1 className="font-weight-light">This is a chat title</h1>
							<p>Test Description for the Chat</p>
						</div>
					</div>
				</Link>
			</div>
		</div>
	);
}

export default Chats;
