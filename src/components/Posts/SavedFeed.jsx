import React, { useEffect, useState } from "react";

import PostImg from "./PostImg";
import PostWrapper from "./PostWrapper";

const SavedFeed = () => {
	const [url, setUrl] = useState([]);

	const func = () => {
		const saved = localStorage.getItem("filetoJson");
		const values = JSON.parse(saved);
		return values;
	};
	useEffect(() => {
		setUrl(func());
	}, []);

	return (
		<>
			{url ? (
				<PostWrapper>
					{url.map((el) => {
						return (
							<>
								{/* {console.log(el.isrc)} */}
								<PostImg
									key={el.isrc}
									src={el.isrc}
									alt="img"
									desc={el.desc}
									lSrc={el.lsrc}
									className="postImage"
								/>
							</>
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
