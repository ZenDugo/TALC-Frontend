import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function Chat() {
	let { chatSlug } = useParams();

	useEffect(() => {}, [chatSlug]);

	return (
		<div className="home">
			<div className="container">
				<h1 className="mt-5">This is all of you Chats</h1>
				<h6 className="mb-5">The chat slug is, {chatSlug}</h6>
				<p>Chat Message</p>
				<p>Chat Message</p>
				<p>Chat Message</p>
			</div>
		</div>
	);
}

export default Chat;
