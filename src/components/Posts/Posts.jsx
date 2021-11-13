import React, { useEffect, useState } from "react";
import { api } from "./utils/api";
import PostFeed from "./PostFeed";
import SavedPosts from "./Saved";

import "./Posts.scss";

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
					<PostFeed userInfo={userInfo} loading={loading} />
				)}
				{tab === "SAVED" && (
					<SavedPosts userInfo={userInfo} loading={loading} />
				)}
			</div>
		</>
	);
};

export default Posts;
