import React, { useEffect, useState } from "react";
import { PostIcon, SavedIcon } from "../Icons/Icon";
import PostFeed from "./PostFeed";
import { api } from "./utils/Services.utils";

import "./Posts.scss";

const Posts = () => {
	const [userInfo, setUserInfo] = useState([]);
	const [savedInfo, setSavedInfo] = useState([]);
	const [tab, setTab] = useState("POSTS");
	const [loading, setLoading] = useState(true);
	const [hasError, setHasError] = useState(false);

	useEffect(() => {
		const fetchPosts = async () => {
			setLoading(true);
			setHasError(false);
			try {
				const [link1, link2] = await api();
				setUserInfo(link1);
				setSavedInfo(link2);
				setLoading(false);
			} catch (error) {
				console.log("error:", error);
				setHasError(true);
			}
		};
		fetchPosts();
	}, []);
	return (
		<>
			<hr />

			<div className="container">
				<div className="profile-tab">
					<div
						style={{ fontWeight: tab === "POSTS" ? "500" : "" }}
						onClick={() => setTab("POSTS")}
					>
						<PostIcon />
						<span>Posts</span>
					</div>
					<div
						style={{ fontWeight: tab === "SAVED" ? "500" : "" }}
						onClick={() => setTab("SAVED")}
					>
						<SavedIcon />
						<span>Saved</span>
					</div>
				</div>
				<br />
				{hasError && <p>Something went wrong.</p>}
				{tab === "POSTS" ? (
					<PostFeed page={userInfo} loading={loading} />
				) : (
					<PostFeed page={savedInfo} loading={loading} />
				)}
			</div>
		</>
	);
};

export default Posts;
