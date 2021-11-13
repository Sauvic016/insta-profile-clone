import React, { useEffect, useState } from "react";
import { api } from "./utils/api";
import PostWrapper from "./PostWrapper";

import "./Posts.scss";
import PostImg from "./PostImg";

const Posts = () => {
	const [userInfo, setUserInfo] = useState([]);

	const [tab, setTab] = useState("POSTS");

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchPosts = async () => {
			const appd = await api();
			setLoading(false);
			setUserInfo(appd);
		};
		fetchPosts();
	}, []);

	return (
		<>
			<hr />
			<br />

			<div className="container">
				<button onClick={() => setTab("POSTS")}> Posts</button>
				<button onClick={() => setTab("SAVED")}> Saved</button>
				{tab === "POSTS" && (
					<>
						{loading && <h1>Loading...</h1>}
						{userInfo.length !== 0 ? (
							<PostWrapper>
								{userInfo.map((el) => {
									return (
										<PostImg
											key={el.id}
											src={el.urls.thumb}
											alt="img"
											className="postImage"
										/>
									);
								})}
							</PostWrapper>
						) : (
							<div>
								Once you start making new posts, they'll appear
								here
							</div>
						)}
					</>
				)}
				{tab === "SAVED" && (
					<>
						{userInfo.length !== 0 ? (
							<PostWrapper>
								{userInfo.map((el) => {
									if (el.likes > 10) {
										return (
											<PostImg
												key={el.id}
												src={el.urls.thumb}
												alt="img"
												className="postImage"
											/>
										);
									}
									return null;
								})}
							</PostWrapper>
						) : (
							<h1>
								Once you start saving the post you like ,
								they'll appear here
							</h1>
						)}
					</>
				)}
			</div>
		</>
	);
};

export default Posts;
