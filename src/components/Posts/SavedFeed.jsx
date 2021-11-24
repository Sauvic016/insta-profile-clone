// TODO: Use material ui icon and like feature
import React, { useEffect, useState } from "react";
import PostImg from "./PostImg";
import PostWrapper from "./PostWrapper";

const SavedFeed = () => {
	const [url, setUrl] = useState([]);

	const func = () => {
		let values = [],
			keys = Object.keys(localStorage),
			i = keys.length;

		while (i--) {
			values.push(JSON.parse(localStorage.getItem(keys[i])));
		}

		return values;
	};
	useEffect(() => {
		setUrl(func());
	}, []);

	return (
		<>
			{url.length > 0 ? (
				<PostWrapper>
					{url.map((el) => {
						return (
							<PostImg
								key={el}
								src={el[0]}
								alt="img"
								desc={el[2]}
								lSrc={el[1]}
								className="postImage"
							/>
						);
					})}
				</PostWrapper>
			) : (
				<h2>As you save the images, they will appear here..</h2>
			)}
		</>
	);
};

export default SavedFeed;
