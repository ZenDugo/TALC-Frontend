import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function Estate() {
	let { postSlug } = useParams();

	useEffect(() => {
		// fetch post using the postSlug
	}, [postSlug]);

	return (
		<div className="home">
			<div className="container">
				<h1 className="mt-5">This is a Property Title</h1>
				<h6 className="mb-5">The property slug is, {postSlug}</h6>
				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s, when an unknown printer took a galley of type and
					scrambled it to make a type specimen book.
				</p>
				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s, when an unknown printer took a galley of type and
					scrambled it to make a type specimen book.
				</p>
				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s, when an unknown printer took a galley of type and
					scrambled it to make a type specimen book.
				</p>
			</div>
		</div>
	);
}

export default Estate;
